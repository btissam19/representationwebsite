const express = require('express');
const upload = require('../middleware/uploadFiles');
const CreateResume = require('../controller/resume');
const ResumetRoute = express.Router();
ResumetRoute.route('/') .post(upload.single('file'),CreateResume);
 module.exports=ResumetRoute;