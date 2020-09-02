const Rooms = require("../controllers/rooms");

const rooms = (app) => {
  app.get("/rooms", Rooms.getRooms);
  app.get("/rooms/getRoom/:roomName", Rooms.getRoom);
  app.post("/rooms/create", Rooms.createRoom);
  app.get("/rooms/addUser/:roomName/:userName", Rooms.addUser);
  app.get("/rooms/messages/:roomName/:latestDate", Rooms.getMessages);
  app.post("/rooms/addMessage", Rooms.addMessage);
  app.post("/rooms/removeUser", Rooms.removeUser);
};

module.exports = rooms;
