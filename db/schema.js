const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();
const seedData = require("./seed.js");

//const DB_SOURCE = "./db" + process.env.DB_SOURCE;
const DB_NAME = "budget";

const createQueries = {
  "user":  `CREATE TABLE user (id INTEGER PRIMARY KEY, username text NOT NULL UNIQUE, email text NOT NULL, password text NOT NULL)`,
  "category": `CREATE TABLE category (id INTEGER PRIMARY KEY, name text NOT NULL UNIQUE)`,
  "merchant": `CREATE TABLE merchant (id INTEGER PRIMARY KEY, name text NOT NULL UNIQUE)`,
  "budget": `CREATE TABLE budget (id INTEGER PRIMARY KEY, amount REAL NOT NULL, user_id INTEGER, category_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(id), FOREIGN KEY(category_id) REFERENCES category(id))`,
  "expense": `CREATE TABLE expense (id INTEGER PRIMARY KEY, date text NOT NULL, amount real NOT NULL, description text, payment_type NOT NULL, user_id INTEGER, merchant_id INTEGER, category_id INTEGER, FOREIGN KEY(user_id) REFERENCES user(id), FOREIGN KEY(merchant_id) REFERENCES merchant(id), FOREIGN KEY(category_id) REFERENCES category(id))`
}

const insertQueries = {
  "user": `INSERT INTO user (username, email, password) values (?, ?, ?)`,
  "category": `INSERT INTO category (name) values (?)`,
  "merchant": `INSERT INTO merchant (name) values (?)`,
  "budget": `INSERT INTO budget (amount, user_id, category_id) values (?, ?, ?)`,
  "expense": `INSERT INTO expense (date, amount, description, payment_type, user_id, merchant_id, category_id) values (?, ?, ?, ?, ?, ?, ?)`
}

let db = new sqlite3.Database(`./${DB_NAME}.db`, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log(`Connected to the SQLite ${DB_NAME} database.`);
    for (const [name, query] of Object.entries(createQueries)) {
      db.run(`DROP TABLE IF EXISTS ${name}`, (err) => {
        db.run(query, async (err) => {
          if (err) {
            console.log(`Table ${name} was already created`);
          } else {
            //Table just created, creating some rows
            console.log(`Table ${name} created`);
            for (let datum of seedData[`${name}`]) {
              await db.run(insertQueries[`${name}`], datum)
            }
            // May execute before all data is seeded, therefore, only partial data may log
            // To confirm all data is seeded, go to the route
            db.all(`SELECT * from ${name}`, (err, data) => {
              if (err) {
                console.log(err);
              } else{
                console.log(name);
                console.log(data);
              }
            });
          }
        }); // Closes Create Table
      }); // Closes Drop Table
    }
  }
});

module.exports = db;
