const express = require("express");

const Router = express.Router();

const userAuthentication = require("../middleware/userAuthentication.js");

const {loginController,registerController, currentController} = require("../controllers/userControllers.js");


Router.post("/register",registerController);

Router.post("/login",loginController);


Router.post("/current",userAuthentication,currentController);

module.exports = Router;