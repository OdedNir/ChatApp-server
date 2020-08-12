let MessageModel = require("../models/message.model");

const getMessages = (req, res) => {
  MessageModel.find()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const createMessage = (req, res) => {
  const { sender, content, room, date } = req.body;
  const parsedDate = Date.parse(date);

  const newMessage = new MessageModel({
    sender,
    content,
    room,
    date: parsedDate,
  });

  newMessage
    .save()
    .then(() => res.json("Message added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  getMessages,
  createMessage,
};
