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

module.exports = { 
    CreateSkills, 
    getALLSkills,
};
