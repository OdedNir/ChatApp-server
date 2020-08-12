let UserModel = require("../models/user.model");

const getUsers = (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const getIDs = (req, res) => {
  UserModel.find({}, { _id: 1 })
    .then((ids) => res.json(ids))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const getUser = (req, res) => {
  UserModel.findOne({ username: req.params.username })
    .then((user) => res.json(user.username))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

const createUser = (req, res) => {
  const username = req.body.username;

  const newUser = new UserModel({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  getUsers,
  getIDs,
  getUser,
  createUser,
};
