//indexController

//Imports
const db = require("../models/queries");
const { body, validationResult } = require("express-validator");

const alphaErr = "must be only letters";
const nameLengthErr = "must be between 1 and 10 characters";

//Create index (Homepage)
async function usersListGet(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  let users = usernames.map((user) => user.username);
  res.render("index", { title: "Homepage", users: users });
}

//Create user form
async function usersFormGet(req, res) {
  res.render("userForm", { title: "User Form" });
}

//Validation and sanitization
const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage(`User name ${nameLengthErr}.`),
];

//Create username async function
async function usersPost(req, res) {
 
    try {
      await Promise.all(validateUser.map((validation) => validation.run(req)));
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).render("error", {
          title: "Error 404",
          //Note that the validationResult will
          //be an array of errors
          errors: errors.array(),
        });
      } else {
        const { username } = req.body;
        await db.insertUsername(username);
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
      res.status(500).render("error", {
        title: "Error",
        errors: [],
        message: "An error occurred while creating the user.",
      });
    }
  
}


module.exports = {
  usersListGet,
  usersFormGet,
  usersPost,
  //validateUser (Used together with code app.post in app.js)
};
