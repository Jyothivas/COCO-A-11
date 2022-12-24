const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'contact_app'
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
});

module.exports = mysqlConnection;
