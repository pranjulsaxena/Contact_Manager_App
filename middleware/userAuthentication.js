const jwt = require("jsonwebtoken");

const secret = process.env.secret;
function middleware(req, res, next) {

    const token = req.headers.token;
    console.log(secret);
    console.log("token is verifying");
    const user = jwt.verify(token, secret);
    console.log("token verified");
    if (!user) {
        res.status(400);
        throw new Error("invalid token");
    }
    req.user = user;
    console.log(req.user);
    next();
}

module.exports = middleware;