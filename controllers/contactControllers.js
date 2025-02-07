


// express-async-handler is a middleware utility for Express.js that simplifies handling asynchronous route handlers and middleware functions by automatically catching errors and passing them to Express’s built-in error-handling middleware.

// Why use express-async-handler?
// Simplifies Async/Await Error Handling
// Normally, in an Express route using async/await, you must wrap it in a try/catch block to catch errors and pass them to next(), 

// Any errors thrown inside the async function are automatically caught and forwarded to Express's error handler.

// With express-async-handler, you can avoid writing try/catch every time:


const asyncHandler = require("express-async-handler");
const contactModels = require("../models/contactModels");

//@desc GET all contacts 
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler (async(req,res) =>{
    // it will fetch all the contacts for user who is logged in. with the help of validateToken middleware
    const contacts = await contactModels.find({user_id : req.user.id});
    res.status(200).json({contacts,message :"Get all contacts"});
});


//@desc create New  contacts 
//@route POST /api/contacts
//@access private

const createContact = asyncHandler (async(req,res) =>{
    const {name,email,contact} = req.body;
    if(!name || !email || !contact){
        res.status(400);
        throw new Error("All fields are mandatory!!");
    }
    const createContact = await  contactModels.create({name,email,contact,user_id:req.user.id});
    res.status(201).json({createContact, message :"create Contact"});
});


//@desc get a contact
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler (async(req,res)=>{

    const contact_find = await contactModels.findById(req.params.id);

    if(!contact_find){
        res.status(404);
        throw new Error("Contact not Found");
    }

    res.status(200).json(contact_find);
});



//@desc Update a  contact
//@route PUT /api/contacts/:id
//@access private

const updateContact = asyncHandler (async(req,res)=>{
    // const {name,contact,email} = req.body;
    const contact_find = await contactModels.findById(req.params.id);

    if(!contact_find){
        res.status(404);
        throw new Error("Contact not Found");
    }
   
    const updated_contact = await contactModels.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json(updated_contact);
   
});


//@desc DELETE  a contact
//@route DELETE /api/contacts/:id
//@access private

const deleteContact = asyncHandler (async(req,res)=>{
    const contact_find = await contactModels.findById(req.params.id);

    if(!contact_find){
        res.status(404);
        throw new Error("Contact not Found");
    }
   await contactModels.findByIdAndDelete(req.params.id);
    res.status(200).json(contact_find);
});


module.exports = {
    getContact, createContact, updateContact,deleteContact, getContacts
}



