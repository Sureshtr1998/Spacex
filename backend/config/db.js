const mongoose = require("mongoose")
//const {registertestUser} = require('../controllers/userController')


const connectDB = async() =>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
     //   registertestUser()
    }

    catch(err){
        console.log(`Error: ${err}`)
        process.exit(1)
    }
}

module.exports = connectDB