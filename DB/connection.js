const mongoose = require('mongoose');

const URI='mongodb+srv://usama:111@cluster0.rmz3v.mongodb.net/cluster0?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true  });
    console.log("Connection Established");
}

module.exports=connectDB;
