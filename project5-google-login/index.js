const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const session = require("express-session");
const authRoute = require("./routers/auth-route");
const profileRoute = require("./routers/profile-route");
const passport = require("passport");
require("./config/passport");
const flash = require("connect-flash");

//middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
app.use("/auth", authRoute);
app.use("/profile", profileRoute);

// connect to mongodb atlas
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connect to mongodb atlas successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// route
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

// app.get("/*", (req, res) => {
//   res.status(404).send("404 Page Not Found.");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
