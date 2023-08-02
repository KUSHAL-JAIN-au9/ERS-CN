import { ObjectId } from "mongodb";
import Employee from "../model/employeeSchema.js";
import User from "../model/userSchema.js";

// render create employee page
export const createEmployeePage = async function (req, res) {
  const admins = await Employee.find({});
  console.log("users", admins);
  const noAdminsUser = admins.filter((user) => !user.isAdmin);
  console.log("no admins user", noAdminsUser);
  return res.render("add_employee", { admins: noAdminsUser });
};

// render edit employee page
export const editEmployeePage = async function (req, res) {
  const { id } = req.params;

  const objectId = new ObjectId(id);
  const employee = await Employee.findOne({ _id: objectId });

  //get all employee who is not admins
  const admins = await Employee.find({});
  console.log("users", admins);
  const noAdminsUser = admins.filter((user) => !user.isAdmin);

  console.log("id", id);
  console.log("employ edit", employee, objectId);

  return res.render("edit_employee", { employee, admins: noAdminsUser });
};

// create student
export const createEmployee = async function (req, res) {
  const { name, email, contactNumber, dob, isAdmin, reviewer } = req.body;

  const is_admin = isAdmin === "true";

  console.log("req", req.body);
  try {
    const employee = await Employee.findOne({ email });

    if (employee) {
      console.log("Email already exists");
      return res.redirect("back");
    }

    const newEmployee = await Employee.create({
      name,
      email,
      contactNumber,
      dob,
      isAdmin: is_admin,
      reviewer: reviewer || "none",
    });
    await newEmployee.save();

    const newUser = await User.create({
      name,
      email,
      password: "1234",
      isAdmin: is_admin,
    });

    await newUser.save();

    if (!newUser) {
      console.log(`Error in creating user admin`);
      return res.redirect("back");
    }

    req.flash("message", "employee added sucessfully");
    return res.redirect("/");
  } catch (error) {
    console.log(`Error in creating employee: ${error}`);
    return res.redirect("back");
  }
};

// edit student
export const deleteEmployee = async function (req, res) {
  const { id } = req.params;
  console.log("id", id);

  try {
    // find the student using id in params
    const employee = await Employee.findById(id);
    await Employee.findByIdAndDelete(id);
    req.flash("message", "employee deleted sucessfully");
    res.redirect("back");
  } catch (error) {
    console.log("Error in deleting student");
    return res.redirect("back");
  }
};

export const editEmployee = async function (req, res) {
  const { id } = req.params;
  console.log("body", req.body);
  const updateData = {
    name: req.body.name,
    email: req.body.email,
    password: "1234",
    isAdmin: req.body.isAdmin,
  };

  try {
    const objectId = new ObjectId(id);
    const result = await Employee.updateOne(
      { _id: objectId },
      { $set: req.body }
    );

    const response = await User.updateOne(
      { email: req.body.email },
      { $set: updateData }
    );
    console.log(`employee updated sucessffully`);
    req.flash("message", "employee updated sucessfully");
    res.redirect("/");
  } catch (error) {
    console.error("Error updating document:", error);
    res.redirect("back");
  }
};
