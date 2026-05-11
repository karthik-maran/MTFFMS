const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config({path:"./.env"});
const connectDB = async ()=>{
    
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected")
    }catch(error){
        console.error("mongodb connection error:"+error.message);
    
       
    }
    
    
};

module.exports = connectDB;