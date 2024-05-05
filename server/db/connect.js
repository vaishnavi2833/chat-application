const mongoose = require('mongoose')
require ('dotenv').config()

const connectdb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    }catch(err){
        console.log("error connecting to db")
    }
}

module.exports=connectdb