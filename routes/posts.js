const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//ROUTES

// Get back all the post
router.get('/',async (req, res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
}); 

// router.get('/specific',(req, res)=> {
//     res.send("Specific post");
// })

// Return the post
router.post('/', async(req,res) => {
    const post = new Post({
        title: req.body.title,
        discription: req.body.discription
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    }
    catch(err)
    {
        res.json({message: err});
    }
});

// Specific Post
router.get('/:postId',async(req,res)=> {
    try{
        const post =  await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
});

// Delete a Post
router.delete('/:PostId', async(req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.jsonp(removePost);
    }catch(err){
        res.json({message: err});
    }
});

// Update Post

router.patch('/:PostId', async(req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});



module.exports = router;
