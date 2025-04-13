# database
Working with PostgreSQL database

Follow the MVC paradigm with routes 
Tools like EJS and Express will be utilized
A package.json file will be created to keep
track of applications used in project

Install express-validator and node-postgres (pg). The pg library facilitates interfacing with the PostgreSQL db

npm install pg

install dotenv to manage environment variables which enhances scalability and security

npm install dotenv

Create a .env file in root of project

Add .env to .gitignore

Run the database for local and production
Local: db/populatedb.js <local-db-url>
(Get the local db url from the .env file)
