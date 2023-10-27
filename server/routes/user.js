const express=require('express');
const userRoutes =express.Router()
const {createUser ,loginUser}=require('../controller/user')

userRoutes.post('/register',createUser);
userRoutes.post('/login',loginUser);

module.exports=userRoutes;
