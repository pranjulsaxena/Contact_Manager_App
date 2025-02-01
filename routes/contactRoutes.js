const express = require("express");

const Router = express.Router();
//     or
// const {Router} = require("express");

// ✔ In JavaScript, method chaining allows calling multiple methods on the same object.
// ✔ .route("/") returns a route handler object, and .get() & .post() are methods of that object.
// ✔ If you put a semicolon (;) after .get(), it ends the statement, breaking the chain.

const { getContacts,
        createContact,
        getContact,
        updateContact,
        deleteContact

} = require("../controllers/contactControllers");


Router.route("/")
    .get(getContacts)
    .post(createContact);

Router.route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);


module.exports = Router;
