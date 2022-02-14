require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var session = require("express-session");

// middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((e) => {
    console.log(e);
  });

// route
app.get("/", (req, res) => {
  res.send("Welcome to homepage.");
});

app.get("/verify", (req, res) => {
  req.session.isVerified = true;
  res.send("You has been verified");
});

app.get("/secret", (req, res) => {
  if (req.session.isVerified == true) {
    res.send(process.env.SECRET);
  } else {
    res.status(403).send("You are not verified user.");
  }
});

// // error handling
app.get("/*", (req, res) => {
  res.status(404);
  res.send("404 Page not found.");
});

//error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is broken. We will fix it soon.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
