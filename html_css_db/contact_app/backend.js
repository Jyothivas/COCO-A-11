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


app.listen(9000);