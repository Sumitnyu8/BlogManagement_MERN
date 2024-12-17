const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');

router.get('/users',async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error Finding Users',err);
        res.status(500).json({ msg: 'Server Error' });
    }
});

router.post('/register', async (req,res) => {
    const {name, email, password} = req.body;
    try{
        const lowercaseEmail = email.toLowerCase();
        const existingUser = await User.findOne({email:lowercaseEmail});
        if(existingUser){
            return res.status(400).json({msg: 'Email already exists'});
        }else{
                const hashedPassword = await bcrypt.hash(password,10);
                const user = new User({name, email:lowercaseEmail, password: hashedPassword});
                await user.save();
                res.status(201).json({msg : 'User created Successfully'})
            }
        
    }catch (error) {
        res.status(500).json({msg : error.message})
    }
});

router.post('/login',async (req,res)=>{
    const {email, password} = req.body;
    try{
        const lowercaseEmail = email.toLowerCase();
        const user = await User.findOne({email:lowercaseEmail});
        if(!user){
            res.status(404).json({msg: 'User not found'})
        }else{
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch) return res.status(400).json({msg : "Invalid Password"});
            res.status(200).json({msg : 'Login Successfully', userName: user.name})
        }
    }catch(err){
        res.status(500).json({msg : err.message});
    }
    
})

module.exports = router;