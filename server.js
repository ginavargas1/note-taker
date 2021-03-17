//add dependencies
const express = require ("express");
const path = require ("path");
const fs = require ("fs");
const bodyParser = require("body-parser");

// add express app and process.env
const app = express();
const PORT = process.env.PORT || 3080;

//set express app 
app.use(express.static('public'));

//routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));






