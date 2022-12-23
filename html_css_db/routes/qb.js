const express = require("express");
const path = require('path');
const mysqlConnection = require("../utils/database");

const Router = express.Router();

Router.get('/',function(req,resp){
  console.log(path.join(__dirname,'../project_with_apis/index.html'));
  resp.sendFile(path.join(__dirname,'../project_with_apis/index.html'));
})

//get all employee data
Router.get("/get_users", (req, resp) => {
  
  var query ="SELECT * FROM users";
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
  console.log(req.params.id)
  mysqlConnection.query(
    "DELETE FROM users WHERE user_id= ?",
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
  const sql ="INSERT INTO users (email, age, gender) VALUES (?,?,?)";
  mysqlConnection.query(sql, [qb.email, qb.age, qb.gender],(err, results, fields) => {
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
    mysqlConnection.query(`UPDATE users SET email = ?, age =?, gender =? WHERE user_id=?`,[ rb.email, rb.age, rb.gender, req.params.id],(err, results, fields) => {
      if (!err) {
        res.send(rb);
      } else {
        console.log(err);
      }
    })
  });
module.exports = Router;