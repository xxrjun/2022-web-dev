const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const e = require("connect-flash");

// find and get ID from user's data
passport.serializeUser((user, done) => {
  console.log("Serializing user now.");
  done(null, user._id);
});

// use id to get user's data
passport.deserializeUser((_id, done) => {
  console.log("Deserializing user now.");
  User.findById({ _id }).then((user) => {
    console.log("Found user.");
    done(null, user);
  });
});

// using local strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log(username, password);
    User.findOne({ email: username })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return done(null, false);
          }
          if (!result) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        });
      })
      .catch((err) => {
        return done(null, false);
      });
  })
);

// using google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      //   console.log(profile);
      User.findOne({ googleID: profile.id }).then((foundUser) => {
        if (foundUser) {
          // take data out
          console.log("User already exist.");
          done(null, foundUser);
        } else {
          // create newUser and save into db
          new User({
            name: profile.displayName,
            googleID: profile.id,
            thumbnail: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              console.log("New user created.");
              done(null, newUser);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }
  )
);
