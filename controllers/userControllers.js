const asyncHandler = require("express-async-handler");


//@desc Register a user
//@route post /api/v1/users/register
// access:public
const registerController = asyncHandler(async (req, res)=>{
  res.json("hello motto");
});


//@desc Login by user
//@route post /api/v1/users/login
// access:public
const loginController = asyncHandler(async (req,res)=>{
    res.json("hello motto");
});


//@desc Register a user
//@route post /api/v1/users/current
// access:private (only logged in user can accessed it only.)
const currentController = asyncHandler(async function(req,res){
    res.json({message:"hello motto"});
})







module.exports = {registerController,loginController,currentController};