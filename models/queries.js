/*Query with pg: create 2 query functions 

1. Getting all usernames
2. Inserting usernames
*/

//Imports
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames(username) VALUES ($1)", [username]);
}

/*
Note: The following is not to be done! This query opens the door
for an SQL injection attack! since USER ENTERED VALUE i.e. 
username is input directly into the query

await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");

Example of attack code: sike'); DROP TABLE usernames; --

pg provides query parameterization to prevent this. User input 
is not passed directly into the query, instead it is passed to 
an array as the second argument and pg handles the rest

*/

module.exports = {
  getAllUsernames,
  insertUsername,
};
