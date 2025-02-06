const express = require("express");

const Router = express.Router();

const validateToken = require("../middleware/userAuthentication.js");

const {loginController,registerController, currentController} = require("../controllers/userControllers.js");


Router.post("/register",registerController);

Router.post("/login",loginController);


Router.post("/current",validateToken,currentController);

module.exports = Router;