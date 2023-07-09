const express = require("express");
const merchants = express.Router();
const {
  getAllMerchants,
} = require("../models/merchant");

// Index
merchants.get("/", async (req, res) => {
  try {
    const allMerchants = await getAllMerchants();
    res.render("./merchants/index.ejs", {
      merchants: allMerchants,
    });
  } catch (err) {
    console.error(err)
  }

  });

module.exports = merchants;
