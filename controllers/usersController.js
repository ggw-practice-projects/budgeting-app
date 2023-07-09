const express = require("express");
const users = express.Router();
const {
  getAllUsers,
} = require("../models/user");

// Index
users.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    // for (let key in allUsers) {
    //   console.log(key, allUsers[key]);
    // }
    res.render("./users/index.ejs", {
      users: allUsers,
    });
  } catch (err) {
    console.error(err)
  }

  });

module.exports = users;
