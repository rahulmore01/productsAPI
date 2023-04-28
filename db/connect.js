// file content direct connection to mongodb with backend/api
const mongoose = require('mongoose');


// copy pasted from mongoose website
const connectDB = (uri) =>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
    useUnifiedTopology:true,
    })
}

module.exports = connectDB
