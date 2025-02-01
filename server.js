const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

 // Default to 3000 if PORT is not set
const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`Sever running on port ${port}`);
    
})