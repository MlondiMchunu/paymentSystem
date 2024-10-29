const User = require('../models/userModel')
require('dotenv').config()
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
        let { id } = req.params.id
        const { email, amount, plan } = req.body

        const response = await paystack.transaction.initialize({
            email,
            amount,
            plan //optional but, used for subscription
        })

        const data = {
            paystack_ref: response.data.reference
        }

        await User.findByIdAndUpdate(id, data)

        res.status(200).send({
            data:response.data,
            message: response.message,
            status: response.status
        })
    
    }catch(error){
        res.status(400).send({data: {}, error: `${error.message}`, status: 1})
    }
}

//verify transaction
const verifyTrans = async(req, res)=>{
    try{
        let { id } = req.params

        const user = await User.findById(id)

        if(user.paystack_ref == "success")
            return res.status(401).send({
                data: {},
                message: "Transaction has been verified",
                status: 1,
        })
    }catch(error){
        res.status(400).send({data: {}, error: `${error.message}`})
    }
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    initializeTrans
}