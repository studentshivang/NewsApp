const NEWS_MODEL = require("../models/News");
const bcrypt = require("bcrypt");

const router = require("express").Router();

//Posting News
router.post("/post", async (req, res) => {
  try {
    const { title, description, location, time, author } = req.body;
    const result = NEWS_MODEL({ title, description, location, time, author });
    await result.save();
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

//Getting News by particular queries e.g. name_of_author and location
//Using Queries (Get all news when no query is given)
router.get("/allNews", async (req, res) => {
  try {
    const { ...queries } = req.query;
    console.log(queries);
    const newsData = await NEWS_MODEL.find(queries);
    console.log(newsData);
    res.json({ success: true, newsData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
}
});

//Using params
router.get("/newsbyAuthor/:author", async (req, res) => {
    try {
        const author = req.params;
        const newsData = await NEWS_MODEL.find(author);
        console.log(newsData);
        res.json({ success: true, newsData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
    }
});

router.get("/newsbyLocation/:location", async (req, res) => {
    try {
        const location = req.params;
        const newsData = await NEWS_MODEL.find(location);
        console.log(newsData);
        res.json({ success: true, newsData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
    }
});

//Deleting News
router.delete('/newsDelete/:id',async(req,res)=>{
    try {
        const id =req.params.id;
        await NEWS_MODEL.deleteOne({_id:id});
        res.json({success:true,msg:"Deleted document!"});
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
    }
})
module.exports = router;
