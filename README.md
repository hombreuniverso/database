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

Production: db/populatedb.js <production-db-url>
(Get the production db url form the provider)

Add .gitignore file to root of directory of app to
prevent files from being uploaded to git repo

Also add it to git repo too:
git add .gitignore
git commit -m "Added .gitignore file"

Add .env, node_modules and package-lock.json files to .gitignore file. Prevents them from being uploaded to repo

To remove files for e.g. node_modules:
git rm -r --cached node_modules


