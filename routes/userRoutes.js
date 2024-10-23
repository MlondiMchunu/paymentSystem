const express = require('express')
const userRoute = express.Router()

const { getUser,getUsers, createUser, initializeTrans } = require("../controllers/userController")

userRoute.get('/getUser/:id',getUser)
userRoute.get('/getUsers',getUsers)
userRoute.post('/createUser',createUser)
userRoute.post('/transact/:id',initializeTrans)

module.exports = {userRoute}