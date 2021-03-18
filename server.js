//add dependencies
const express = require ("express");
const path = require ("path");
const fs = require ("fs");
const bodyParser = require("body-parser");
var notes = require("./db/db.json")

// add express app and process.env
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

//set express app 
app.use(express.static("public"));

//routes
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname + "/public/notes.html")));

// need POST api route 
app.post("/api/notes", (req,res) => {
    
    let newNote = req.body
    newNote.id = req.body.title
    notes.push(newNote)
    // console.table(notes)
    res.json(newNote)
});

// need GET api route, save button
app.get("/api/notes", (req,res) =>  res.json(notes));


//delete not working
app.delete(`/api/notes/:id`, (req,res) => {
    const deleteId = req.params.id
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == deleteId) {
            notes[i] = ""
        }
        
    }
});



//GET *
app.get("/*", (req,res) => res.sendFile(__dirname + "/public/index.html"));

app.listen(PORT, () => console.log(`server listening on PORT 3000`));





