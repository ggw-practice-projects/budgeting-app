const db = require("../db/dbConfig");

async function getAllTransactions() {
  try {
    return [];
  } catch (err) {
    return err;
  }
}

module.exports = {
    getAllTransactions,
  };