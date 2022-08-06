const AUTHORS_MODEL = require("../models/Authors");
const bcrypt = require('bcrypt');

const router = require("express").Router();
//Registering new Author
router.post("/author", async (req, res) => {
  try {
    const { name, age, email, password, address, phone, dob } = req.body;
    //Password Hashing
    const enPass= await bcrypt.hash(password,12);
    const authorRegistered =AUTHORS_MODEL({name, age, email, password:enPass, address, phone, dob });
    await authorRegistered.save();
    res.json({success:true,authorRegistered});
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});
//Updating Author name
router.patch("/author", async (req, res) => {
  try {
    const { newname,  email } = req.body;
    //Updating
    await AUTHORS_MODEL.updateOne({email},{name:newname});
    //Checking After updating
    try {
        const updatedDocument =await AUTHORS_MODEL.findOne({email});
        const {name} = updatedDocument;
        res.json({success:true,updatedName:name});
        
    } catch (error) {
        res.json({success:true,msg:"Verfication Incomplete"})
        console.log(`Verification incomplete`,error);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});
//Getting all Authors
router.get("/getAuthors", async (req, res) => {
  try {
    const all_Authors = await AUTHORS_MODEL.find();
    console.log(all_Authors);
    res.json({ success: true, all_Authors });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
