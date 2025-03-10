//Main entry point for the application

//Imports
const express = require("express");
const path = require("node:path");
const usersRouter = require("./routes/usersRouter");

//Create instance of express
const app = express();

//Set port variable
const PORT = process.env.PORT || 3000;

//Create server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Set static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//Create routes

//Users router
app.use("/", usersRouter);

