const express = require("express");
const transactions = express.Router();
const {
  getAllTransactions,
} = require("../models/transaction");

// Index
transactions.get("/", async (req, res) => {
    const allTransactions = await getAllTransactions();
    res.render("./transactions/index.ejs", {
      transactions: allTransactions,
    });
  });

  module.exports = transactions;