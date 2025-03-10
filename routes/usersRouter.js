//UsersRouter

//Imports
const express = require("express");
const usersController = require("../controllers/usersController");

//Create instance of router
const usersRouter = express.Router();

/*Create routes so that all logic will pass through controller
and .notation will be used to access methods with required logic*/
usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/users", usersController.usersFormGet);

//Exports
module.exports = usersRouter;
