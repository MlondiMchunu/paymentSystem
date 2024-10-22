const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

//specify  port from environment variable
const PORT = process.env.PORT ||8080
app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("Hello Payment")
})

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
})