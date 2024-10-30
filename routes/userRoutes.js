const express = require('express')
const userRoute = express.Router()

const { getUser,
    getUsers, 
    createUser, 
    initializeTrans,
    verifyTrans } = require("../controllers/userController")

userRoute.get('/getUser/:id',getUser)
userRoute.get('/getUsers',getUsers)
userRoute.post('/createUser',createUser)
userRoute.post('/transact/:id',initializeTrans)
userRoute.post("/verifyTrans/:id",verifyTrans)

module.exports = {userRoute}