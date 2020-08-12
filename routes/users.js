let Users = require("../controllers/users");

const users = (app) => {
  app.get("/users", Users.getUsers);
  app.get("/users/ids", Users.getIDs);
  app.get("/users/:username", Users.getUser);
  app.post("/users/create", Users.createUser);
};

module.exports = users;
