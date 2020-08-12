const Rooms = require("../controllers/rooms");

const rooms = (app) => {
  app.get("/rooms", Rooms.getRooms);
  app.post("/rooms/create", Rooms.createRoom);
};

module.exports = rooms;
