const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/AllenHouse25_A_DB'

mongoose.connect(mongoURI).then(()=>{
    console.log("Connection Successfully established...");  
}).catch((err)=>{
    console.log("Database connection failed...");
})

module.exports = mongoose