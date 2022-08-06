const mongoose =require('mongoose');

const dbConnect=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/myAssignmentDB");
        console.log("Connected to the database...");
    } catch (err) {
        console.log(err);
    }
}

module.exports=dbConnect;