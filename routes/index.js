const messages = require("./messages");
const rooms = require("./rooms");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("OK");
  });

  messages(app);
  rooms(app);
};

module.exports = routes;
