
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mysqlConnection = require("../../html_css_db/utils/database");

const Router = express.Router();
const cors = require("cors");


var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(Router);

//showing html page
 app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'/index.html'));
 })    

 //add new user
app.post('/add_user',function(req,resp){
    var email = req.body.Email;
    var age = req.body.Age;
    var gender = req.body.gender;
    console.log(req.body)
    const sql ="INSERT INTO users (email, age, gender) VALUES (?,?,?)";
    mysqlConnection.query(sql, [email, age, gender],(err, results, fields) => {
        if (!err) {
          resp.sendFile(path.join(__dirname,'/index.html'));
        } else {
          console.log(err);
        }
      });
})

//delete employee by id
app.delete("/delete_user", (req, res) => {
  console.log(req.query.id)
  mysqlConnection.query(
    "DELETE FROM users WHERE user_id= ?",
    [req.query.id],
    (err, results, fields) => {
      if (!err) {
        res.redirect('/');
      } else {
        console.log(err);
      }
    }
  );
});

//update user by user id
app.put("/update_user",(req, res) =>{

  mysqlConnection.query(`select * from users WHERE user_id=?`,[req.query.id],(err, data) => {
    if(!err){
      var Data = JSON.stringify(data);
      var jsonData = JSON.parse(Data);
      console.log("Data "+Data);
      console.log("jsonData "+jsonData);
      console.log("email "+jsonData[0].email);

      let id=jsonData[0].user_id;
      let email=jsonData[0].email;
      let age=jsonData[0].age;

      update(id,email,age);

    } else {
      console.log(err);
    }
  })
});

app.listen(3000);

