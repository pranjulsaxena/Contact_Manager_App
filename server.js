const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

 // Default to 3000 if PORT is not set
const port = process.env.PORT || 3000;

app.use("/api/v1/contacts", require("./routes/contactRoutes.js"));

app.listen(port, ()=>{
    console.log(`Sever running on port ${port}`);
    
})