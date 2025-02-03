const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(
            "Database Connected : ",
            connect.connection.host,
            connect.connection.name
        );
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};


module.exports = connectDb;



// No, you do not need express-async-handler here because this function (connectDb) is not an Express route or middleware function. express-async-handler is specifically designed for handling asynchronous errors inside Express route handlers.

// However, your current implementation already handles errors properly using try/catch. If you want to improve error handling further, you can throw the error instead of just logging it: