const express = require('express')
const app  =  express()
const cors = require("cors")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const https = require('https');
const port = 3000;
// const connectDB = require('./db')

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const businessRoutes = require('./routes/business.routes');

dotenv.config()

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// connectDB;

// mongoose.connect(process.env.db_uri)
//     .then(()=>{
//         console.log("Connected successfully to DB!")
//     })
//     .catch((error)=>{
//         console.log("Could not connect to DB due some error:", error.stack),
//         process.exit();
//     })

    app.use('/v1/business', businessRoutes)

// app.use('/v1/products', productRoutes)


app.get('/', (req, res)=>{
    res.send("Welcome to our API");
})


app.listen(process.env.PORT, ()=>{
    console.log("Listening @ port:", process.env.PORT)
})