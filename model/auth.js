const mongoose = require('mongoose')
const uthschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    
    password:{
    
        type:String,
        require:true
        
    },
    gmail:{
        type:String,
        require:true
    },
    userstypes:{
        type:String,
        require:true
      
    }
})

module.exports = mongoose.model("Auth",uthschema)