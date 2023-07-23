// render sign in page
export const signin = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("back");
  }
  res.render("signin");
};

// create session
export const createSession = (req, res) => {
  console.log("Session created successfully");
  return res.redirect("/");
};

// signout
export const signout = (req, res) => {
  req?.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  return res?.redirect("/users/signin");
};
