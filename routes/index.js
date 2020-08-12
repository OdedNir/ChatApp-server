const users = require("./users");
const messages = require("./messages");
const rooms = require("./rooms");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("OK");
  });

  users(app);
  messages(app);
  rooms(app);
};

module.exports = routes;
