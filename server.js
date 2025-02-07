const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const dotenv = require("dotenv").config();
const app = express();
const connectDb = require("./config/dbConnection.js");
connectDb();

 // Default to 3000 if PORT is not set
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/v1/contacts", require("./routes/contactRoutes.js"));
app.use("/api/v1/users", require("./routes/userRoutes.js"));
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`Sever running on port ${port}`);
    
})