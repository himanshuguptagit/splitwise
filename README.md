
## Mini Splitwise

Users add expenses to the database and get recommended way to settle them.

## Setup

The project is build on node express as REST backend and MYSQL as database.

1. Download the project and "run npm install"

##### Setup Database:

2. Change MySQL database credentials in lib/database.js

3. In lib/database.js: Uncomment "createDatabase()" at the end of the file ->  run the file by "node database.js" -> comment the line again.

4. In lib/database.js: Uncomment "createTables()" at the end of the file ->  run the file by "node database.js" -> comment the line again.

## REST Endpoints

### 1. Users
POST    localhost:8080/users    -> Create a user
GET     localhost:8080/users    -> Get all users
GET     localhost:8080/users/:id    -> Get user by id

### 2. Expenses
POST    localhost:8080/expenses    -> Create an expense
GET     localhost:8080/expenses    -> Get all expenses
GET     localhost:8080/expenses/:id    -> Get expense by id
GET     localhost:8080/expenses/user/:id    -> Get expenses of user by userId

### 3. Settlements
POST    localhost:8080/settlements    -> Create a transaction when a user pay some other user directly
GET     localhost:8080/settlements/recommendations    -> Get recommended way to settle debts in a minimum cashflow way


### Examples: 
Refer to "Splitwise.postman_collection.json"