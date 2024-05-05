const express = require("express")
const authRoute = express.Router()
const {login,logout,signup} = require('../controllers/authController')

authRoute.route('/login').post(login)
authRoute.route('/signup').post(signup)
authRoute.route('/logout').post(logout)

module.exports=authRoute