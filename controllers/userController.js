const User = require('../models/userModel')

const createUser = async(req,res)=>{
    let {email,fullname} = req.body

    const user = new User({
        fullname,email,
    })
    await user.save()

    res.status(201).send({
        data: user,
        message: "User created succesfully",
        status: 0,
    })
}