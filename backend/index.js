const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const {connection} =require("./db")



app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log(`server run on ${process.env.port}`)
        
    } catch (error) {
        console.log("something went wrong")
    }
    
})