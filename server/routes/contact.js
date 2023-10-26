const express = require('express');
const contactRoutes=express.Router();
const CreateContact=require('../controller/contact');

contactRoutes.route('/').post(CreateContact);

module.exports=contactRoutes;