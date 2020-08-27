const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
