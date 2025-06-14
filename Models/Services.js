const mongoose = require('mongoose');
const serviceschema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
})
const Service=mongoose.model('services',serviceschema);
module.exports=Service