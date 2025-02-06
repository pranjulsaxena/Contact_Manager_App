const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const contactSchema = new Schema({
    name:{
        type:String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type:String,
        required: [true,"Please add the contact email address"],
    },
    contact:{
        type:String,
        required: [true, "Please add the contact phone number"],
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("Contact",contactSchema);
