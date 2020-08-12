// Imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const setRouter = require("./routes");

// Server Port
const PORT = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Router
setRouter(app);

// MongoDB Connection
const username = "OdedNir";
const password = "Skiper007";
const uri = `mongodb+srv://${username}:${password}@chatapp.qlqfi.mongodb.net/ChatApp?retryWrites=true&w=majority`;
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
  const collections = ["users", "messages", "rooms"];
  dropCollections(collections);
  console.log("MongoDB connection successful!");
});

const dropCollections = (collections) => {
  for (let i = 0; i < collections.length; i++) {
    connection.db.dropCollection(collections[i], (err, result) => {
      if (err) {
        console.log(`Error deleting the collection: ${collections[i]}`);
      } else {
        console.log(`${collections[i]} collection droped`);
      }
    });
  }
};

app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
