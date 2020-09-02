// Imports
const express = require("express");
const socketio = require("./services/socket-io-service");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const setRouter = require("./routes");

// Server Port
const PORT = process.env.PORT || 5000;

const app = express();
const server = socketio.getServer(app);
const io = socketio.getIO(server);

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Router
setRouter(app);

// MongoDB Connection
const username = "USERNAME"; // REPLACE with your user name!
const password = "PASSWORD"; // REPLACE with your password!
// Put your uri inside: (Provided when creating a mongoDB database.)
// For example:
// const uri = `mongodb+srv://${username}:${password}@chatapp.qlqfi.mongodb.net/ChatApp?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.on("error", (error) => {
  console.log("Error: " + error);
});
connection.once("open", () => {
  const collections = ["messages", "rooms"];
  dropCollections(collections);
  console.log("MongoDB connection successful!");
});

const dropCollections = (collections) => {
  for (let i = 0; i < collections.length; i++) {
    connection.db.dropCollection(collections[i], (err) => {
      if (err) {
        console.log(`The collection "${collections[i]}" is already empty!`);
      } else {
        console.log(`${collections[i]} collection droped`);
      }
    });
  }
};

server.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
