const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB   = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 6000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))