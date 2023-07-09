const express = require("express");
const budgets = express.Router();
const {
  getAllBudgets,
} = require("../models/budget");

// Index
budgets.get("/", async (req, res) => {
  try {
    const allBudgets = await getAllBudgets();
    res.render("./budgets/index.ejs", {
      budgets: allBudgets,
    });
  } catch (err) {
    console.error(err)
  }

  });

module.exports = budgets;
