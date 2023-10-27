const express = require('express');
const upload = require('../middleware/uploadFiles');
const protect=require('../middleware/protect');
const {CreateProject ,getALLProject} = require('../controller/project');
const ProjectRoute = express.Router();
ProjectRoute.route('/').post(upload.single('file'),CreateProject).get(getALLProject);
module.exports=ProjectRoute;