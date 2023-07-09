const express = require("express");
const expenses = express.Router();
const {
  getAllExpenses,
} = require("../models/expense");

// Index
expenses.get("/", async (req, res) => {
  try {
    const allExpenses = await getAllExpenses();
    res.render("./expenses/index.ejs", {
      expenses: allExpenses,
    });
  } catch (err) {
    console.error(err)
  }

  });

module.exports = expenses;
