const db = require("../db/dbConfig");

async function getAllCategories() {
    const query = "SELECT * FROM category";
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
    getAllCategories,
  };
