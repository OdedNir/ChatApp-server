const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  userNames: [String],
  messagesIds: [mongoose.ObjectId],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
