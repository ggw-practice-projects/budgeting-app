// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.static("public")); // allows use of CSS and other front-end assets from the folder `public`
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({extended: true})) // Parse incoming traditional HTML Form data

// ROUTES
app.get("/", (req, res) => {
  res.render('./home.ejs');
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/user", async (req, res) => {
  const query = "SELECT * FROM user";
  const params = [];
  try {
    await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/merchant", async (req, res) => {
  const query = "SELECT * FROM merchant";
  const params = [];
  try {
    await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/category", async (req, res) => {
  const query = "SELECT * FROM category";
  const params = [];
  try {
    await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/budget", async (req, res) => {
  const query = "SELECT * FROM budget";
  const params = [];
  try {
    await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/expense", async (req, res) => {
  const query = "SELECT * FROM expense";
  const params = [];
  try {
    await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

app.get("/test/:id", async (req, res) => {
  const query = "SELECT * FROM user WHERE id = ?";
  const params = [req.params.id];
  try {
    const userID = await db.all(query, params, (error, rows) => {
      res.json({ rows: rows, success: true });
      if (error) {
        console.log(error);
      }
    });
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// Transaction routes
const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);

// 404 Page

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;