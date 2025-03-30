//Initialize db in app

//Imports
const { Pool } = require("pg");

/*All of the following properties should be read from 
environment variables. We're hardcoding them here for 
simplicity*/

/*
//Method 1: Define the connecton information
module.exports = new Pool({
  host: "localhost", //or wherever the db is hosted
  user: "colin",
  database: "top_users",
  password: "Marriage",
  port: 5432, //The default port
});
*/

//Method 2: Via a connection url
// Again, this should be read from an environment variable
module.exports = new Pool({
     //connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
  connectionString: "postgresql://colin:Marriage@localhost:5432/top_users"
});


