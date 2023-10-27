const mongoose = require('mongoose');

const userSingSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }


})
module.exports = mongoose.model('Users',userSingSchema);