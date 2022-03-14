const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");
const flash = require("connect-flash");
const e = require("connect-flash");

router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: "Wrong email or password.",
  }),
  (req, res) => {
    if (req.session.returnTo) {
      let newPath = req.session.returnTo;
      req.session.returnTo = "";
      res.redirect(newPath);
    } else {
      res.redirect("/profile");
    }
  }
);

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

router.get("/signup", (req, res) => {
  res.render("signup", { user: req.user });
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  let { name, email, password } = req.body;
  // check if the data is already in db
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    req.flash("error_msg", "This email has been registered");
    res.redirect("/auth/signup");
  } else {
    const hash = await bcrypt.hash(password, 10);
    password = hash;
    let newUser = new User({ name, email, password });
    try {
      await newUser.save();
      req.flash("success_msg", "Registeration succed. You can login now.");
      res.redirect("/auth/login");
    } catch (err) {
      req.flash("error_msg", err.errors.name.properties.message);
      res.redirect("/auth/signup");
    }
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  if (req.session.returnTo) {
    let newPath = req.session.returnTo;
    req.session.returnTo = "";
    res.redirect(newPath);
  } else {
    res.redirect("/profile");
  }
});

module.exports = router;
