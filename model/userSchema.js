import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

// create a virtual property to set hashed password
userSchema.virtual("password").set(function (value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

// function to compare hashed password
userSchema.methods.isPasswordCorrect = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

const User = mongoose.model("User", userSchema);

export default User;
