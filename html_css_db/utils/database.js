const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'nodejs_userdb'
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
});

module.exports = mysqlConnection;


















/* const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'employee_data'
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database: '+error);
    return;
  }
  console.log('Connection established sucessfully');
});

connection.query(`select * from employee`,(err,result,fields)=>{
    if (err) {
        console.log(err);
    }
    return console.log(result);
})
connection.end((error) => {
}); */