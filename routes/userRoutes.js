const express = require("express");

const Router = express.Router();

;
const {loginController,registerController, currentController} = require("../controllers/userControllers.js");


Router.post("/register",registerController);

Router.post("/login",loginController);


Router.post("/current",currentController);

module.exports = Router;