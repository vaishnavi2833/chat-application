const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profileImg:{
        type:String,
        default:""
    }
})

const User=mongoose.model("User",userSchema)
module.exports=User