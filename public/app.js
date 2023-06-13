const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../models/patients');
const Signup = require('../models/signup');
const bodyParser = require('body-parser');
const path = require("path");
const { userInfo } = require('os');
const app = express();
const port = process.env.PORT || 5000; 
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://thesahebalam:<SahebShaikh>@cluster0.tikabfx.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://0.0.0.0:27017';
/////////////////////////////
const dbName = 'patients'

const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect((err) => {
  if (err) throw err;
});
console.log("Connected to patient");
 
const db = client.db(dbName);
////////////////// Static pages /////////////
  app.use("/" ,express.static(__dirname));
  app.use(express.static(__dirname + "/public/CSS"));

  app.use("/Admin", express.static(__dirname + "/html/Admin.html"));
  app.use(express.static(__dirname + "/public/CSS/"));


  app.use("/Signup.html", express.static(__dirname + "/html/signup.html"));
  app.use(express.static(__dirname + "/public/CSS/"));

  app.use("/user", express.static(__dirname + "/html/login.html"));
  app.use(express.static(__dirname + "/public/CSS/"));

  app.use("/contact.html", express.static(__dirname + "/html/contact.html"));
  app.use(express.static(__dirname + "/public/CSS/contact.css"));

  app.use("/dashboard", express.static(__dirname + "/html/dashboard.html"));
  app.use(express.static(__dirname + "/public/CSS/"));

  /////////////////Sending signup Data ///////////////

  app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up',(req,res)=>{
    var name = req.body.name;
    var gender = req.body.gender;
    var dob = req.body.dob;
    var phone =req.body.phone;
    var email =req.body.email;
    var password = req.body.password;
    
  
    var data = {
        "name": name,
        "gender":gender,
        "dob":dob,
        "phone":phone,
        "email":email,
        "password":password,
        
    }
db.collection('signups').insertOne(data,(err, signup)=>{
        if (err) {
          console.log("Data Not inserted");
        }
           console.log("Record inserted Successfully");
              
    });
      
    return res.redirect('/user');
})
app.get('/',(req,res)=>{
  res.set({
      'Access-control-Allow-Origin': '*'
      });
  return res.redirect("/user");
    });
  
app.post('/login',async(req,res)=>{
  try{
    const email =req.body.email;
    const password = req.body.password;
   const userInfo = await  db.collection("signups").findOne({email:email});
   if (!userInfo)
   {
        res.send("please enter valid Email");
   }
   if (userInfo.password != password){
      res.send("Invalid Credentials plaese Enter Valid Details" );
    } 
    if (userInfo.email == email && userInfo.password == password) {  
      // res.redirect(`/dashboard?name=${userInfo.name}&email=${userInfo.email}`);
      res.json(userInfo);

    }
  }
  catch (erorr){
    res.send(erorr);
  }
});

// app.get('/dashboard', (req, res) => {
//   const { name, email } = req.query;
//   // Use the name and email to render the dashboard template
//   res.render('dashboard', { name, email });
// });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    