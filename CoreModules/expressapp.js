"use strict";
const fs = require("fs");
const express = require("express");
// const nodemon = require('nodemon');

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  console.log(req.url);
  const data = fs.readFileSync("index.html");
  res.send(data.toString());
});

app.get("/about", (req, res) => {
  res.send("I am Sending about page as response");
});
app.get("/about", (req, res) => {
  res.send("I am Sending about page as response");
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
