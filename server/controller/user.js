const User=require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.json({message: 'Oops, user already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        if(newUser){
            res.status(201).json({
                id: newUser._id,
                email: newUser.email,
                password:newUser.password,
                token: generateToken(newUser._id)
            });
        } else {
            res.json({message: "Oops, you can't create a user"});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

const loginUser=async (req,res)=>{
    const {email, password} = req.body;

    const chekingUser = await User.findOne({ email });

    if(chekingUser && (await bcrypt.compare(password, chekingUser.password)))
    {
        res.status(201).json({
            id: chekingUser._id,
            email: chekingUser.email,
            token: generateToken(chekingUser._id),
            message: "you are logged in"
        });
        
    } 
     else {
        res.status(400).json({message:"oops you are not register"})
         }
}

const  generateToken=(id)=>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      })
}

module.exports={createUser ,loginUser};