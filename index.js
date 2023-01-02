// import express
const express = require('express');
const dotenv = require('dotenv').config();

// set the port
const port = process.env.PORT || 5000;

// initlize the server
let app = express();

// enable boday parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/openai',require('./routes/openaiRoutes'))
app.listen(port, ()=> console.log(`lesern at the port no ${port}`));