const express = require("express");
const mysqlConnection = require("../utils/database");

const Router = express.Router();

//get all employee data
Router.get("/get_user", (req, resp) => {
 
  var query ="SELECT * FROM user";
  mysqlConnection.query(query,function(error,data){
      if (error) {
        throw error;  
      } else {
        resp.send(JSON.stringify(data));
      }
    });
});

//delete employee by id
 Router.delete("/delete_user/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM user WHERE user_id= ?",
    [req.params.id],
    (err, results, fields) => {
      if (!err) {
        res.send("User has been successfully deleted.");
      } else {
        console.log(err);
      }
    }
  );
});
 
//Add new employee
 Router.post("/add_user", (req, res) => {
  let qb = req.body;
  const sql ="INSERT INTO user (user_id, email, age, gender) VALUES (?,?,?,?)";
  mysqlConnection.query(sql [qb.user_id, qb.email, qb.age, qb.gender],(err, results, fields) => {
      if (!err) {
        res.send(qb);
      } else {
        console.log(err);
      }
    });
  });
//update user by user id
  Router.put("/update_user/:id",(req, res) =>{
    let rb=req.body;
    mysqlConnection.query(`UPDATE user SET email = ?, age =?, gender =? WHERE user_id=?`,[ rb.email, rb.age, rb.gender, req.params.id],(err, results, fields) => {
      if (!err) {
        res.send(rb);
      } else {
        console.log(err);
      }
    })
  });
module.exports = Router;