const express = require("express");
const cors = require("cors");

const mysql = require("mysql2");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 5001;

const db = mysql.createConnection({
  host: "localhost",
  user: "shannon",
  password: "123456",
  database: "todoApp",
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/users", (req, res) => {
  const sql = `INSERT INTO users (first_name, last_name, email, password) VALUES (${req.body.first_name}, ${req.body.last_name}, ${req.body.email}, ${req.body.password})`;

  console.log(req.body.first_name);

  // const values = [
  //   req.body.firstName,
  //   req.body.lastName,
  //   req.body.email,
  //   req.body.password,
  // ];

  db.query(sql, (err, result) => {
    if (err) {
      return err;
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} `);
});
