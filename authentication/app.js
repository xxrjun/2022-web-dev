require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser(process.env.SECRET));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

const requireLogin = (req, res, next) => {
  if (!req.session.isVerified == true) {
    res.redirect("login");
  } else {
    next();
  }
};

// connect to db
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
  res.send("Welcome to home page.");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.post("/signup", async (req, res, next) => {
  let { username, password } = req.body;
  try {
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      res.send("Username has been taken.");
    } else {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) next(err);
          let newUser = new User({ username, password: hash });
          console.log(hash);
          try {
            newUser
              .save()
              .then(() => {
                res.send("Signup Successfully.");
              })
              .catch((e) => {
                console.log(e);
                res.send("Signup failed.");
              });
          } catch (err) {
            next(err);
          }
        });
      });
    }
  } catch (err) {
    next(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  try {
    let foundUser = await User.findOne({ username });
    if (foundUser) {
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (result) {
          req.session.isVerified = true;
          res.redirect("secret");
        } else {
          res.send("Username or Password is not correct.");
        }
      });
    } else {
      res.send("Username or Password is not correct.");
    }
  } catch (err) {
    next(err);
  }
});

app.get("/*", (req, res) => {
  res.status(404).send("404 Page Not Found.");
});

// erorr handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something is broken. We will fix it soon.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
