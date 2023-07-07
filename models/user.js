const db = require("../db/dbConfig");

async function getAllUsers() {
    const query = "SELECT * FROM user";
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
    getAllUsers,
  };
