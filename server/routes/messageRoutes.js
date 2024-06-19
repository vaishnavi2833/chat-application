const express=require('express')
const messageRoute=express.Router()
const{sendMessage,getMessage}=require('../controllers/messageController')
const protectRoute = require('../middleware/protectRoute')

messageRoute.route('/send/:id').post(protectRoute,sendMessage)
messageRoute.route('/:id').get(protectRoute,getMessage)

module.exports=messageRoute