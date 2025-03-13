//indexController

const db = require('../models/db');

db.forEach(data =>{
  console.log(data);
});

//Create index (Homepage)
exports.usersListGet =
  ("/",
  (req, res) => {
    let users = db;
    res.render("index", { title: "Homepage", users: users });
  });

//Create user form
exports.usersFormGet =
  ("/new",
  (req, res) => {
    res.render("userForm", { title: "User Form" });
  });


//Post user infomation
exports.usersPost = ("/new", (req, res) => {

  let users = db;
  
  try{
    users.push(req.body.username);
    console.log(users);
    res.render("index", {title: "Homepage", users: users});
  }
  catch(err){
    console.log(err);

  }
    
  //res.redirect("/");

});
