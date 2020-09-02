let MessageModel = require("../models/message.model");
let RoomModel = require("../models/room.model");
const socketio = require("../services/socket-io-service");

let io;

const getMessages = (req, res) => {
  MessageModel.find()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const createMessage = async (req, res) => {
  const { userName, content, roomName, date } = req.body;
  const parsedDate = Date.parse(date);

  const newMessage = new MessageModel({
    userName,
    content,
    roomName,
    date: parsedDate,
  });

  await newMessage.save();

  // broadcast to all other users in that room that a message was sent:
  if (!io) io = socketio.getIO();
  io.emit("message sent", newMessage);

  const room = await RoomModel.findOne({ roomName });
  room.messagesIds.push(newMessage._id);
  await room.save();

  res.json(newMessage);
};

module.exports = {
  getMessages,
  createMessage,
};
