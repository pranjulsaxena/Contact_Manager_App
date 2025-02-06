const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const secret = process.env.secret;
const dotenv = require("dotenv").config();
//@desc Register a user
//@route post /api/v1/users/register
// access:public

const registerController = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!!");
  }
  const userAvailable = await userModel.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!!");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password : ", hashedPassword);

  const newUser = await userModel.create({ username, email, password: hashedPassword });
  res.json({
    message: "user registered successfuly!!", newUser
  })
});


//@desc Login by user
//@route post /api/v1/users/login
// access:public
const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!!");
  }
 
  const user = await userModel.findOne({ email });

  //comparison between user entered password and hashed password of registered user.
 
  const hashedPassword = await bcrypt.compare(password,user.password);
  console.log(hashedPassword);
  if(user && hashedPassword){
    const token =  jwt.sign(
      {
        user:{
          username:user.username,
          email:user.email,
          id:user._id
        }
      }
      ,secret);

      res.status(200).json({token});
  }else{
    res.status(401);
    throw new Error("Invalid Credentials!!");
  }
});


//@desc Register a user
//@route post /api/v1/users/current
// access:private (only logged in user can accessed it only.)


const currentController = asyncHandler(async function (req, res) {
  const user = req.user;
  res.json({user});
})


module.exports = { registerController, loginController, currentController };