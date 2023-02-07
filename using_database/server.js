 
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const qbRoutes = require("./routes/qb");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(qbRoutes);

app.listen(4000);