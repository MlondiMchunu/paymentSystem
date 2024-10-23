const express = require('express')
const userRoute = express.Router()

const { getUser,getUsers, createUser } = require("../controllers/userController")

userRoute.get('/getUser/:id',getUser)
userRoute.get('/getUsers',getUsers)
userRoute.post('/createUser',createUser)

module.exports = {userRoute}