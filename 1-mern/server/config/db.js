const mongoose = require('mongoose');

require('dotenv').config({path: '.env.dev'});

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("DB Connect")
    } catch (error){
        console.log(error)
        process.exit(1); //Stop server
    }
}

module.exports = connectDB;