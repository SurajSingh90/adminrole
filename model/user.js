const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    phone:{
    
        type:Number,
        require:true
        
    },
    gmail:{
        type:String,
        require:true
    },
    
})

module.exports = mongoose.model("users",userschema)