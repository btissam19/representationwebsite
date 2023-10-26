const express = require('express');
const upload = require('../middleware/uploadFiles');
const {
    CreateSkills,
    getALLSkills,
    updateSkill,
    deleteSkill
} = require('../controller/skills');

const SkillsRoutes = express.Router();
SkillsRoutes.route('/')
    .post(upload.single('file'), CreateSkills)
    .get(getALLSkills);

// Update a skill, get a specific skill, and delete a skill
SkillsRoutes.route('/:skillId')
    .put(upload.single('file'), updateSkill)
    .delete(deleteSkill);

module.exports = SkillsRoutes;
