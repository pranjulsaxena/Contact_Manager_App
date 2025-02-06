const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const secret = process.env.secret;
const validateToken = asyncHandler(async (req, res, next) => {

    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ");

        jwt.verify(token[1], secret, (err, decodedInfo) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decodedInfo.user;
            next();
        });

        if(!token){
            res.status(400);
            throw new Error("User is not authorized or invalid token");
        }
    }



})

module.exports = validateToken;