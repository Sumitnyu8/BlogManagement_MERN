const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
    
},{timestamps:true});

module.exports = mongoose.model("Blog",BlogSchema);