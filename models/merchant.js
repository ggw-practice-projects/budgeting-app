const db = require("../db/dbConfig");

async function getAllMerchants() {
    const query = "SELECT * FROM merchant";
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
    getAllMerchants,
  };
