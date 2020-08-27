const includes = require("lodash/includes");
let RoomModel = require("../models/room.model");
let MessageModel = require("../models/message.model");

const getRooms = (req, res) => {
  RoomModel.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getRoom = (req, res) => {
  RoomModel.findOne({ roomName: req.params.roomName })
    .then((room) => res.json(room))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createRoom = async (req, res) => {
  const { roomName, userNames } = req.body;

  const newRoom = new RoomModel({
    roomName,
    userNames,
    messagesIds: [],
  });

  const room = await RoomModel.findOne({ roomName });

  if (room) {
    if (!includes(room.userNames, ...userNames)) {
      room.userNames.push(...userNames);

      await room.save();
    }

    return res.json(room);
  }

  newRoom
    .save()
    .then(() => res.json(newRoom))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const addUser = async (req, res) => {
  const { roomName, userName } = req.params;
  const room = await RoomModel.findOne({ roomName });
  room.userNames.push(userName);
  await room.save();
};

const getMessages = async (req, res) => {
  const { roomName, latestDate } = req.params;
  const rooms = await RoomModel.findOne({ roomName }, { messagesIds: 1 });
  MessageModel.find({ date: { $gt: latestDate } })
    .where("_id")
    .in(rooms.messagesIds)
    .sort({ date: 1 })
    .exec((err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.status(400).json(`Error: ${err}`);
      }
    });
};

const addMessage = async (req, res) => {
  const { roomName, messageID } = req.body;
  const room = await RoomModel.findOne({ roomName });
  room.messagesIds.push(messageID);
  await room.save();
};

module.exports = {
  getRooms,
  getRoom,
  createRoom,
  addUser,
  getMessages,
  addMessage,
};
