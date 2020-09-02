const socketio = require("socket.io");
const http = require("http");

let io;
let server;

const getServer = (app) => {
  if (app !== undefined) {
    server = http.createServer(app);
  }
  return server;
};

const getIO = (server) => {
  if (server !== undefined) {
    io = socketio(server);
  }
  return io;
};

module.exports = {
  getIO,
  getServer,
};
