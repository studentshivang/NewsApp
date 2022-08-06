const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    time:{
        type:String
    },
    author:{
        type:String
    },
},{
    timestamps:true
})

module.exports=mongoose.model("news",newSchema);