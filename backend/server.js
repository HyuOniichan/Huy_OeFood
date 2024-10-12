require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose') 
const cors = require('cors')

// express app
const app = express() 

// middleware 
app.use(express.json()) 
app.use(cors())

// route 
const route = require('./routers') 
route(app) 

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected'))
    .catch(error => console.log(error))

// listening 
app.listen(process.env.PORT, () => console.log(`Listening at port ${process.env.PORT}`))
