const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  messages_ids: [mongoose.ObjectId],
  users_ids: [mongoose.ObjectId],
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
