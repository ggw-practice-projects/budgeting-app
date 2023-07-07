const express = require("express");
const categories = express.Router();
const {
  getAllCategories,
} = require("../models/category");

// Index
categories.get("/", async (req, res) => {
  try {
    const allCategories = await getAllCategories();
    res.render("./categories/index.ejs", {
      categories: allCategories,
    });
  } catch (err) {
    console.error(err)
  }

  });

module.exports = categories;
