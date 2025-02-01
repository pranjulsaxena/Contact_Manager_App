const express = require("express");

const Router = express.Router();
//     or
// const {Router} = require("express");

// ✔ In JavaScript, method chaining allows calling multiple methods on the same object.
// ✔ .route("/") returns a route handler object, and .get() & .post() are methods of that object.
// ✔ If you put a semicolon (;) after .get(), it ends the statement, breaking the chain.

Router.route("/")
    .get((req, res) => {
        res.status(200).json({ message: "Get all contacts" });
    })
    .post((req,res)=>{
        res.status(200).json({message:"Create Contact"});
    });


Router.route("/:id")
    .get((req,res)=>{
        res.status(200).json({message: `Get contact for ${req.params.id}`});
    })
    .put((req,res)=>{
        res.status(200).json({message: `Update contact for ${req.params.id}`});
    })
    .delete((req,res)=>{
        res.status(200).json({message: `Delete contact for ${req.params.id}`});
    });

    
    module.exports = Router;
    