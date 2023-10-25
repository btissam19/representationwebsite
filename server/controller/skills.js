const Skills = require('../models/Skills');

const CreateSkills = async (req, res) => {
    try {
        const { category, technologie } = req.body;
        const filePath = req.file ? req.file.path : null;
        let skillDoc = await Skills.findOne({ category: category }).exec();

        if (!skillDoc) {
            const newSkills = new Skills({
                category,
                skills: [{
                    file: filePath,
                    technologie
                }]
            });
            await newSkills.save();
            res.status(201).json({ newSkills });
        } else {
            const skillsnew = { file: filePath, technologie: technologie };
            skillDoc.skills.push(skillsnew);
            await skillDoc.save();
            res.status(200).json({ skillDoc });
        }
    } catch (e) {
        console.error(e);  
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

const getALLSkills = async (req, res) => {
    try {
        const allSkills = await Skills.find({}).exec();
        res.status(200).json(allSkills);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

const updateSkill = async (req, res) => {
    try {
        const { skillId } = req.params;
        const { category, technologie } = req.body;
        const filePath = req.file ? req.file.path : null;

        let skillDoc = await Skills.findById(skillId);
        if (!skillDoc) {
            return res.status(404).json({ message: "Skill not found" });
        }

        if (category) skillDoc.category = category;
        if (filePath) skillDoc.skills[0].file = filePath; 
        if (technologie) skillDoc.skills[0].technologie = technologie;

        await skillDoc.save();

        res.status(200).json({ skillDoc });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

const deleteSkill = async (req, res) => {
    try {
        const { skillId } = req.params;

        let skillDoc = await Skills.findById(skillId);
        if (!skillDoc) {
            return res.status(404).json({ message: "Skill not found" });
        }

        await Skills.findByIdAndDelete(skillId);
        res.status(200).json({ message: "Skill deleted successfully" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

module.exports = { 
    CreateSkills, 
    getALLSkills,
    updateSkill,
    deleteSkill
};
