const express = require('express')
const app = express()
const authRoutes= require('./routes/authRoutes')
const connectdb = require('./db/connect')
const { connect } = require('mongoose')
require ('dotenv').config()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    connectdb()
    console.log(`Server is listening at port ${port}`)
})