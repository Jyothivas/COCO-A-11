const express = require('express');
const {route} = require('express/lib/application');

const routes = express.Router();

routes.get('/',(req,resp)=>{
    resp.render("index");
})

routes.get('/gallery',(req,resp)=>{
    resp.senred("gallery");
})

module.exports=routes;