//indexController

//Imports
const db = require("../models/db");
const { body, validationResult } = require("express-validator");

db.forEach((data) => {
  console.log(data);
});

let users = db;

//const alphaErr = "must be only letters";
const nameLengthErr = "must be between 1 and 10 characters";

//Create index (Homepage)
exports.usersListGet =
  ("/",
  (req, res) => {
    // let users = db;
    res.render("index", { title: "Homepage", users: users });
  });

//Create user form
exports.usersFormGet =
  ("/new",
  (req, res) => {
    res.render("userForm", { title: "User Form" });
  });

//Validation and sanitization
const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(`User name ${nameLengthErr}.`),
];

//Post user infomation
exports.usersPost = [
  validateUser,
  (req, res) => {
    //let users = db;
 
    try {
     const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).render("error", {
          title: "Error 404",
          /*Note that the validationResult will 
          be an array of errors*/
          errors: errors.array(),
        });
      } else {
        users.push(req.body.username);
        console.log(users);
        return res.status(200).render("index", {
          title: "Homepage",
          users: users,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).render("error", {
        title: "Error",
        errors: [],
        message: "An error occurred while creating the user.",
      });
    }
  },
];
