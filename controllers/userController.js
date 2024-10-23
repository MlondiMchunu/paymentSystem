const User = require('../models/userModel')
require('dotenv').configure()
const paystack = require('paystack-api')(process.env.TEST_SECRET)

const createUser = async(req,res)=>{
    let {email,fullname} = req.body

    const user = new User({
        fullname,email,
    })
    await user.save()

    //res.json(user)

    res.status(201).send({
        data: user,
        message: "User created succesfully",
        status: 0,
    })

    
}

const getUser = async(req,res)=>{
    try{
        let {id} = req.params
        const user = await User.findById(id)

        res.status(200).send({
            user,
            message: "Found user Details",
            status: 0,
        })
    }catch(err){
        res.status(500).send({data:{}, error: err.message, status: 1})
    }
}

const getUsers = async(req,res)=>{
    
        const user = await User.find({})

        res.json(user)
   
}

//initialize transaction
const initializeTrans = async(req,res)=>{
    try{
        let { id } = req.params
        const { email, amount, plan } = req.body

    
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers
}