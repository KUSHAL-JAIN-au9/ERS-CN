import express from "express";
import passport from "../config/passport-local-startegy.js";
import {
  createSession,
  signin,
  signout,
} from "../controller/userController.js";

const router = express.Router();

// ------------------------- Get Requests -----------------------

router.get("/signin", signin);
router.get("/signout", passport.checkAuthentication, signout);
// ------------------------- Post Request -----------------------

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/signin" }),
  createSession
);

export default router;
