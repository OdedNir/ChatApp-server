const Messages = require("../controllers/messages");

const messages = (app) => {
  app.get("/messages", Messages.getMessages);
  app.post("/messages/create", Messages.createMessage);
};

module.exports = messages;
