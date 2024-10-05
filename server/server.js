const express = require('express')
const app = express()
const authRoutes= require('./routes/authRoutes')
const messageRoutes=require('./routes/messageRoutes')
const userRoutes = require('./routes/userRoutes')
const connectdb = require('./db/connect')
const cookieParser = require('cookie-parser')
const cors=require('cors')
const { connect } = require('mongoose')
require ('dotenv').config()

const port = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}))
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    connectdb()
    console.log(`Server is listening at port ${port}`)
})