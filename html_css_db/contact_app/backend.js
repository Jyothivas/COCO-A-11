const express = require("express");
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const dbcon = require("../../html_css_db/utils/connect_db");

const Router = express.Router();

var app = express();
app.use(express.static(__dirname));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(Router);

//showing contact home page
app.get('/contact-app',function(req,resp){
    resp.sendFile(path.join(__dirname,'/index.html'));

 })
 
//showing contact form page
app.get('/form',function(req,resp){
    resp.sendFile(path.join(__dirname,'/contact_form.html'));
})

//showing contacts page
app.get('/view',function(req,resp){
  resp.sendFile(path.join(__dirname,'/views_contact.html'));
})

app.get('/contacts',function(req,resp){
  var query ="SELECT * FROM contact";
  dbcon.query(query,function(error,data){
      if (error) {
        throw error;  
      } else {
       //resp.render('views_contact',{contacts:data});
       resp.send(data);
      }
    });
})

//add new contact 
app.post('/add',function(req,resp){
    console.log(req.body);
    let fname = req.body.fname;
    let mname = req.body.mname;
    let lname = req.body.lname;
    let mobile = req.body.mob;
    let wmobile = req.body.wmob;
    let email = req.body.email;
    let bemail = req.body.bemail;
    let cname = req.body.cname;
    let jtitle = req.body.jtitle;
    let address = req.body.address;
    const sql = "INSERT INTO contact (first_name, middle_name, last_name, phone_number, work_number, email, business_email, company_name, job_title, address) VALUES (?,?,?,?,?,?,?,?,?,?)";
    dbcon.query(sql,[fname, mname, lname, mobile, wmobile, email, bemail, cname, jtitle, address],(err, results, fields) => {
        if (!err) {
          resp.sendFile(path.join(__dirname,'/index.html'));
        } else {
          console.log(err);
        }
      });
})

app.listen(9000);