const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB=require("./db.js")
const model=require("./model/user.model.js")


const app = express();
app.use(express.json());
app.use(cors());
connectDB()

app.post('/register', (req, res) => {
    const {  email, password } = req.body;
  
    const newUser = new User({
    
      email,
      password
    });
  
    newUser.save((err, user) => {
      if (err) {
        return res.status(500).send('Error registering new user');
      }
      res.status(200).send('User registered successfully');
    });
  });

app.listen(3000,()=>{
    console.log("server is running 3000");
    
})