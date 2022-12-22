const express = require('express');
const hbs = require('hbs');
const app = express();

const routes = require('./routes/main');
app.use('',routes)

//hbs template engine
app.set('view engine','hbs');
app.set('views','views');


app.get('/',(req,resp)=>{
    resp.send("wow this is data from server")
})

app.listen(8081,()=>{
    console.log('server started'); 
})