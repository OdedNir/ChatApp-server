let RoomModel = require("../models/room.model");

const getRooms = (req, res) => {
  RoomModel.find()
    .then((rooms) => res.json(rooms))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createRoom = (req, res) => {
  const roomName = req.body.name;
  const messages = req.body.messages;
  const users = req.body.users;

  const newRoom = new RoomModel({
    roomName,
    messages,
    users,
  });

  newRoom
    .save()
    .then(() => res.json("Room added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  getRooms,
  createRoom,
};
