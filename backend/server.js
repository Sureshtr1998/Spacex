const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const userRoutes   = require('./routes/userRoutes')
const connectDB   = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/spacexUser', userRoutes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(path.resolve(), '/frontend/build')))
    app.get('*',(req,res) => res.sendFile(path.resolve(path.resolve(),'frontend','build','index.html')))
}
else {  
    app.get('/', (req, res) =>{
        res.send("API is running")
    })
}


const PORT = process.env.PORT || 6000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))