const express = require('express');
const upload = require('../middleware/uploadFiles');
const protect=require('../middleware/protect');
const {
    CreateSkills,
    getALLSkills,
} = require('../controller/skills');

const SkillsRoutes = express.Router();
SkillsRoutes.route('/')
    .post(upload.single('file'),CreateSkills)
    .get(getALLSkills);

module.exports = SkillsRoutes;
