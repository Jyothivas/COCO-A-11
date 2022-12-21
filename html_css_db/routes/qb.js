const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

/* function array_json(jsondata){
  var obj= JSON.parse(jsondata);
  var result=[];
  for(var i in obj)
   result.push(obj[i]);
} */

//get all employee data
Router.get("/getemployee", (req, resp) => {
 
  var query ="SELECT * FROM employee";
  mysqlConnection.query(query,function(error,data){
  /*  var jsdata= data.toString();
   array_json(jsdata); */
      if (error) {
        throw error;  
      } else {
      /* resp.writeHead(200,{'content-type':'text/html'});
         resp.write('<h1>hello,karan</h1>');
        resp.write(`<h1>${result}</h1>`);
        resp.end(); */
        console.log(data);
        resp.send(JSON.stringify(data));
      }
    });
  
});

//delete employee by id
/* Router.delete("/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM employee WHERE employee_Id= ?",
    [req.params.id],
    (err, results, fields) => {
      if (!err) {
        res.send("The selected quarterback has been successfully deleted.");
      } else {
        console.log(err);
      }
    }
  );
});
 */
//Add new employee
/* Router.post("/Add", (req, res) => {
  let qb = req.body;
  const sql =
    "SET @Employee_Id = ?;SET @First_Name = ?;SET @Last_Name = ?;SET @Employee_Type = ?;SET @Pincode = ?;SET @Birth_Date = ?;"
    CALL Add_or_Update_QB(@Employee_Id, @First_Name, @Last_Name, @Employee_Type, @Pincode, @Birth_Date);";
  mysqlConnection.query(
    sql,
    [
      qb.Employee_Id,
      qb.First_Name,
      qb.Last_Name,
      qb.Employee_Type,
      qb.Pincode,
      qb.Birth_Date,
    ],
    (err, results, fields) => {
      if (!err) {
        results.forEach((element) => {
          if (element.constructor == Array) res.send(element);
        });
      } else {
        console.log(err);
      }
    }
  );
  });
 */
module.exports = Router;