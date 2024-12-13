const express = require('express');
const router = express.Router();
const Blog = require('../models/BlogSchema');

router.get('/', async (req,res)=>{
    try{
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch(err){
        res.status(500).json({msg: err.message});
    }
});

router.post('/addblog', async (req,res)=>{
    const {title, content, author, image, category} = req.body;
    try{
        const blog = new Blog({title, content, author, image, category});
        const savedBlog = await blog.save();
        res.status(200).json(savedBlog);
        console.log(savedBlog._id);
        
    } catch(err){
        res.status(500).json({msg: err.message})
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.put('/:id', async (req,res)=>{
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updatedBlog);
    } catch(err){
        res.status(500).json({msg:err.message})
    }
});


router.delete('/:id', async (req,res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"Blog deleted successfully"});
    } catch(err){
        res.status(500).json({msg:err.message})
    }
});



module.exports = router;
