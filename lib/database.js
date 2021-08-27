var mysql = require('mysql2');

var _con = null;
var _host = "localhost";
var _user = "root";
var _password = "root";
var _database = "splitwise";

module.exports = {
  getDatabaseConnection,
  query,
};


function createDatabase() {

  let con = mysql.createConnection({
    host: _host,
    user: _user,
    password: _password,
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "";
    //Create Database:
    sql = `CREATE DATABASE ${_database}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Database created");
      return;
    });
  });
}


function createDatabaseConnection() {
    _con = mysql.createConnection({
    host: _host,
    user: _user,
    password: _password,
    database: _database
  });

  return _con
}

 function getDatabaseConnection() {

  if (!_con) {
      createDatabaseConnection();
  }
  return _con;
}


function createTables() {

  let con = getDatabaseConnection();
  con.connect(function (err) {
      if(err) throw err;
    console.log("Connected to database!");

    let sql = "";

    //Create Tables
    sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    con.query(sql, function (err, result) {
        if(err) throw err;
      console.log("users Table created");
    });

    sql = "CREATE TABLE expenses (id INT AUTO_INCREMENT PRIMARY KEY, description VARCHAR(255), total INT NOT NULL)";
    con.query(sql, function (err, result) {
        if(err) throw err;
      console.log("expenses Table created");
    });


    sql = "CREATE TABLE userExpenses (id INT AUTO_INCREMENT PRIMARY KEY, userId INT NOT NULL, expenseId INT NOT NULL, amount INT NOT NULL, expectedAmount INT NOT NULL, amountToReceive INT NOT NULL, FOREIGN KEY (userId) REFERENCES users(Id), FOREIGN KEY (expenseId) REFERENCES expenses(Id) )";
    con.query(sql, function (err, result) {
        if(err) throw err;
      console.log("userExpenses Table created");
    });

  });

}


 function query(sql){
  return new Promise((resolve, reject)=>{

    let con = getDatabaseConnection();
    con.connect(function(err) {
        if (err) reject(err);
  
        con.query(sql, function (err, result) {
          if (err) reject(err);
          resolve(result);
        });
      });
  })
}

// createDatabase();
// createTables();


