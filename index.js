const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/users");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users', (req, res) =>{
    var user = new userModel({
        username
    })
})


route =
  "mongodb+srv://aryan:lucifer@cluster0.sw9nz.mongodb.net/wk4_comp3133?retryWrites=true&w=majority";

mongoose.connect(route, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
  console.log("Server is running...");
});


Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@aryanluther 
C-CalvinNguyen
/
101203877_COMP3133
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
101203877_COMP3133/Lab04_101203877_COMP3133/server.js /
@C-CalvinNguyen
C-CalvinNguyen Added Lab 4
Latest commit 883f28b 22 hours ago
 History
 1 contributor
38 lines (31 sloc)  1.05 KB
   
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Users = require('./models/Users.js')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/users', (req, res) => {
    
    let tempUsers = new Users({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company
    })
    
    tempUsers.save((err) => {
        if (err) {
            return res.status(400).json(err.message)
        } else {
            return res.status(200).json({Message: 'Saved'})
        }
    })
})

let db = 'mongodb+srv://capstone_users:comp3078_access@comp3123.bxzhg.mongodb.net/comp3133?retryWrites=true&w=majority'

mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true})

app.listen(port, () => {
    console.log('Server at port ' + port)
})
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete