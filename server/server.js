const express = require('express')
const app = express()
const authRoutes= require('./routes/authRoutes')
const messageRoutes=require('./routes/messageRoutes')
const connectdb = require('./db/connect')
const cookieparser = require('cookie-parser')
const cors=require('cors')
const { connect } = require('mongoose')
require ('dotenv').config()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    connectdb()
    console.log(`Server is listening at port ${port}`)
})