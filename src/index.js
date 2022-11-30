// const express = require("express");
import express from "express";
const app = express();
// //library
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");

import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// settings Library
dotenv.config();
app.use(express.json());
app.use(cors());
express.urlencoded({ extended: true });

// get the client

// // create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "psikotest-testing-0",
//   password: "",
// });
// connection.query("SELECT * FROM `settings`", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   // console.log(fields); // fields contains extra meta data about results, if available
// });

// REST
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ROUTES
// require("./app/routes/post.routes")(app);

import PostRoute from "./app/routes/PostRoute.js";
app.use(PostRoute);

// SETTINGS SERVER
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
