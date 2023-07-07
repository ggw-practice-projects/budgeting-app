const db = require("../db/dbConfig");

async function getAllExpenses() {
    const query = "SELECT * FROM expense";
    const params = [];
    return new Promise((resolve, reject) => {
        db.all(query, params, (error, rows) => {
            if (error) {
                return reject(error);
            }
            resolve(rows);
        });
    });
}

module.exports = {
    getAllExpenses,
  };
