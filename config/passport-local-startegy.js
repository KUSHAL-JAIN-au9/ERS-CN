import passport from "passport";
import { Strategy } from "passport-local";
import User from "../model/userSchema.js";

const local = new Strategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  User.findOne({ email })
    .then((user) => {
      console.log("Result :", user);
      if (!user || !user.isPasswordCorrect(password)) {
        console.log("Invalid Username/Password");
        return done(null, false);
      }
      return done(null, user);
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    });
});

passport.use("local", local);

//serialize user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserialize user
passport.deserializeUser(function (id, done) {
  User.findById(id)
    .then((user) => {
      console.log("Result :", user);

      return done(null, user);
    })
    .catch((err) => {
      console.log("Error in finding user--> Passport", err);
      return done(err);
    });
});

// check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  if (req?.isAuthenticated()) {
    return next();
  }
  return res?.redirect("/users/signin");
};

// set authenticated user for views
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

export default passport;
