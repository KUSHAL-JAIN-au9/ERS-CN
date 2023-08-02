import User from "../model/userSchema.js";
import bcrypt from "bcrypt";

// render sign in page
export const signin = (req, res) => {
  if (req.isAuthenticated()) {
    req.flash("message", "signed in sucessfully");
    return res.redirect("back");
  }
  res.render("signin", { message: req.flash("message") });
};

// create session
export const createSession = (req, res) => {
  console.log("Session created successfully");
  req.flash("message", "signed in sucessfully");
  return res.redirect("/");
};

// signout
export const signout = (req, res) => {
  req?.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("message", "logged out sucessfully");
  });
  req.flash("message", "logged out sucessfully");
  return res?.redirect("/users/signin");
};

// create user
export const createUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  try {
    if (password !== confirmPassword) {
      console.log(`Passwords dont match`);
      return res.redirect("back");
    }
    const user = await User.findOne({ email });

    if (user) {
      console.log(`Email already exists`);
      return res.redirect("back");
    }

    // // Hash the password using bcrypt
    // const hashedPassword = await bcrypt.hash(password, 10); //

    const newUser = await User.create({
      name,
      email,
      password,
    });

    await newUser.save();

    // console.log("newuser", newUser);

    if (!newUser) {
      console.log(`Error in creating user`);
      return res.redirect("back");
    }

    return res.redirect("/users/signin");
  } catch (error) {
    console.log(`Error in creating user: ${error}`);
    res.redirect("back");
  }
};
