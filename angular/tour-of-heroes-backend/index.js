const express = require('express');
const connection = require('./db');
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  connection.query('select * from heroes', (err, result) => {
    if (err) {
      res.send('err');
    } else {
      res.send(result);
    }
  })
})

app.get('/:id', (req, res) => {
  let sql='select * from heroes WHERE id='+req.params.id;
  connection.query(sql, (err, result) => {
    if (err) {
      res.send('err');
    } else {
      res.send(result);
    }
  })
})

app.post('/', (req, resp) => {
  let newhero = {
    name: req.body.name
  };
  const sql = 'INSERT INTO heroes SET ?';
  connection.query(sql, newhero, (err, results, fields) => {
    if (!err) {
      resp.send({ status: true, message: "created successfully" });
    } else {
      resp.send({ status: false, message: "created failed" });
    }
  });
});

//update the records
app.put('/:id', (req, res) => {
  let sql = "UPDATE heroes SET name='" + req.body.name + "'WHERE id=" + req.params.id;
  connection.query(sql, (err, result) => {
    if (!err) {
      res.send({ status: true, message: "created successfully" });
    } else {
      res.send({ status: false, message: "created failed" });
    }
  });
});

app.delete('/:id',(req,res)=>{
  let sql='DELETE FROM heroes WHERE id='+req.params.id;
  connection.query(sql,(err,result)=>{
    if (!err) {
      res.send({ status: true, message: "created successfully" });
    } else {
      res.send({ status: false, message: "created failed" });
    }
  });
});

//search api
app.get('/search',async(req,res)=>{
  const searchQuery =req.query.name;
  console.log(searchQuery);
  connection.query(`SELECT * FROM heroes WHERE name LIKE '%${searchQuery}%'`,(err,result)=>{
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(8282, () => console.log('server started at port:8282'));