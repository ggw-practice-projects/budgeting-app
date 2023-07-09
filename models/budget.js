const db = require("../db/dbConfig");

async function getAllBudgets() {
    const query = "SELECT * FROM budget";
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
    getAllBudgets,
  };
