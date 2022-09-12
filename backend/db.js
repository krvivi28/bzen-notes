const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://echo:vivek@cluster0.wunp6zs.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;