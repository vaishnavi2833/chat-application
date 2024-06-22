const express=require('express')
const messageRoute=express.Router()
const{sendMessage,getMessages}=require('../controllers/messageController')
const protectRoute = require('../middleware/protectRoute')

messageRoute.route('/send/:id').post(protectRoute,sendMessage)
messageRoute.route('/:id').get(protectRoute,getMessages)

module.exports=messageRoute