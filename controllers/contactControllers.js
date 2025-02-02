//@desc GET all contacts 
//@route GET /api/contacts
//@access public

const getContacts = (req,res) =>{
    res.status(200).json({message :"Get all contacts"});
};


//@desc create New  contacts 
//@route POST /api/contacts
//@access public

const createContact = (req,res) =>{
    const {name,email,contact} = req.body;
    if(!name || !email || !contact){
        res.status(400);
        throw new Error("All fields are mandatory!!");
    }
    res.status(201).json({message :"create Contact"});
};


//@desc get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};



//@desc Update  contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};


//@desc DELETE  contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};


module.exports = {
    getContact, createContact, updateContact,deleteContact, getContacts
}



