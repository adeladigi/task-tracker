// Dependencies
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5");
const res = require('express/lib/response');

// settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/timeDB", {useNewUrlparser: true});

const adminSchema = new mongoose.Schema ({
    email: String,
    password: String
});

const secret = process.env.SECRET;

const Admin = new mongoose.model("Admin",  adminSchema);

//Task switch
let taskLight = false;


// Task Arry
const taskList = [];

// App.Get
app.get("/", function(req, res){
    res.render("loginPage");
});

app.get("/profile", function(req, res){
    res.render("profilePage");
});

app.get("/register", function(req, res){
     res.render("registerPage");
});

app.get("/client", function(req, res){
    res.render("clientTemplate");
});

app.get("/edit", function(req, res){

   res.render("editPage", {
       taskList: taskList,
       taskLight: taskLight 
    });
});



// App.Post
app.post("/register", function(req, res){
   const email = req.body.email;
   const username = req.body.username;
   const password = md5(req.body.password);

    const newAdmin = Admin({
    email: email,
    password: password
   });

    newAdmin.save(function(err){
       if(err){
           console.log(err)
       }else{
        res.redirect("/");
       }

   });
   
//    console.log("email is :"+email);
//    console.log("email is :"+password);
});


app.post("/login", function(req, res){
    const emailTyped = req.body.emailTyped;
    const passwordTyped = md5(req.body.passwordTyped);

    Admin.findOne({email: emailTyped}, function(err, foundAdmin){
        if(err){
            console.log("ERROR: 304");
            
        }else{
            // If email matches
            if(foundAdmin){
                // check if password matches
                if(foundAdmin.password === passwordTyped){
                    res.redirect("/profile");
                }else{
                    console.log("Wrong password");
                    res.redirect("/");
                }
            }
           
        
        }
    });
    
    // console.log("This is the email: "+usernameTyped);
    // console.log("This is the password: "+passwordTyped);
});

app.post("/client-bio", function(req, res){
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const gender = req.body.gender;
    const address = req.body.address;
    const state = req.body.state;
    const city = req.body.city;
    const zip = req.body.zip;
    const data = req.body;

    console.log(data);

    //must create function where task gets added
    //to database

    for(let i = 0; i < taskList.length + 2; i++){
        taskList.pop();
    }


    taskLight = false;
    
    res.redirect("/edit");
});

app.post("/add-task", function(req, res){
   const task = req.body.task;
   const num1 = taskList.length;

   if(num1 !== 5 ){

    if(task !== ""){
        taskList.push(task);
        taskLight = true;
        res.redirect("/edit");
       }else {
        res.redirect("/edit"); 
       }

   }else{
    console.log("MAX TASK")
   }


});

app.post("/delete-task", function(req, res){
    const task = req.body.task;
    let result;
    //console.log(task)
       
       for(let i = 0; i <taskList.length; i++){

            if(taskList[i] === task){

              taskList.splice(taskList.indexOf(task),1);
              
            }else{
                // do nothing
            }
      
       }

       

    console.log(taskList);

    res.redirect("/edit");
});


// App.Linsten
app.listen(3000, function(req, res){
    console.log("Server started on port 3000!");
});





//1# continue to higher level encryption.

//2# create client template page and display the data that client will need.

//3# See if you can create a option for light mode and dark mode.

//4# figure out how timer tbn functionality

//5# create a search bar in profile page

//6# times on client profile resets every 24 hours

//7# admin needs to be able to create notes per task

//8# admin should be able to delete already made task from data base.

//9# create error messages "for max task created" and "task already exist"\










