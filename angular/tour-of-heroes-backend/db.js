const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'tourofheroes'
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Database Connected");
  } else {
    console.log("Connection Failed");
  }
});

module.exports = mysqlConnection;