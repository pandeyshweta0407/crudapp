const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    age :{
        type:String,
        required:true
    },
    moblie :{
        type:Number,
        required:true
    },
    work :{
        type:String,
        required:true
    },
    add :{
        type:String,
        required:true
    }, 
    desc :{
        type:String,
        required:true
    }
});

const users  = new mongoose.model("users" , userSchema);
module.exports = users;

