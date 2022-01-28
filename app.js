// Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/timeDB", {useNewUrlparser: true});


// App.Get
app.get("/", function(req, res){
    res.render("landingPage");
});

app.get("/profile", function(req, res){
    res.render("profilePage");
})

// App.Post
app.post("/auth", function(req, res){
   const email = req.body.email;
   
   console.log(email);
   res.redirect("/profile");
});


// App.Linsten
app.listen(3000, function(req, res){
    console.log("Server started on port 3000!");
});