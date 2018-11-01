/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 14: Burguer                   	  *
*UCB Extension - Full-Stack Bootcamp          *
*August 2018                                  *
*********************************************** 
*/

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;