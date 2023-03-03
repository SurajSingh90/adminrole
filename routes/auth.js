const express = require('express')
const routes = express.Router()
const {createsignup,loginpage} = require('../controller/auth')

routes.post('/v1/api/signup',createsignup)
routes.post('/v1/login',loginpage)

module.exports={
    authroutes:routes 
}