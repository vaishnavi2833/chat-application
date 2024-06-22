const express = require('express')
const userRoute = express.Router()
const protectRoute = require('../middleware/protectRoute')
const {getUsers} = require('../controllers/userController')

userRoute.route('/').get(protectRoute,getUsers)

module.exports=userRoute