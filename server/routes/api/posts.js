const { text } = require("express");
const express=require("express");
const mongodb=require("mongodb");

const router = express.Router();

//Get posts
router.get('/', async(req,res)=>{//references /api/posts//
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray()); 
});

//Add posts
router.post('/', async(req,res)=>{
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})


//Delete posts
router.delete('/:id',async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    res.status(200).send();
})

//Update posts
router.post('/:id', async(req,res)=>{
    const posts = await loadPostsCollection();
    await posts.updateOne({
        _id: new mongodb.ObjectId(req.params.id)
    },
    {
        $set:{
            text: req.body.text
        }
    });
    res.status(204).send();
})
 
async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://lvr8:water@cluster0.oqqsb2z.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
    })

    return client.db('cluster0').collection('posts');
}

module.exports = router;
