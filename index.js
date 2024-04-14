const express = require('express')
require('dotenv').config();
// const { initializeFireBaseApp } = require("./firebase")
const cors = require('cors');

//Initializing Express
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.listen(port , ()=> console.log('Server Started '))

//Initializing Firebase Instance
// initializeFireBaseApp();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/user',require('./routes/user'));