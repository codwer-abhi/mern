const mongoose = require('mongoose');
const contactschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
         type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})
const Contact=mongoose.model('contact',contactschema);
module.exports=Contact