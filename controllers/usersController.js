//indexController

//Create index (Homepage)
exports.usersListGet =
  ("/",
  (req, res) => {
    res.render("index", { title: "Homepage" });
  });

  //Create user form
  exports.usersFormGet =
  ("/users",
  (req, res) => {
    res.render("userForm", { title: "User Form" });
  });
