


// express-async-handler is a middleware utility for Express.js that simplifies handling asynchronous route handlers and middleware functions by automatically catching errors and passing them to Express’s built-in error-handling middleware.

// Why use express-async-handler?
// Simplifies Async/Await Error Handling
// Normally, in an Express route using async/await, you must wrap it in a try/catch block to catch errors and pass them to next(), 

// Any errors thrown inside the async function are automatically caught and forwarded to Express's error handler.

// With express-async-handler, you can avoid writing try/catch every time:


const asyncHandler = require("express-async-handler");

//@desc GET all contacts 
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler (async(req,res) =>{
    res.status(200).json({message :"Get all contacts"});
});


//@desc create New  contacts 
//@route POST /api/contacts
//@access public

const createContact = asyncHandler (async(req,res) =>{
    const {name,email,contact} = req.body;
    if(!name || !email || !contact){
        res.status(400);
        throw new Error("All fields are mandatory!!");
    }
    res.status(201).json({message :"create Contact"});
});


//@desc get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler (async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});



//@desc Update  contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler (async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});


//@desc DELETE  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler (async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});


module.exports = {
    getContact, createContact, updateContact,deleteContact, getContacts
}



