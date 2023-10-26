const Resume=require('../models/Resume')

const CreateResume = async (req, res) => {
    try {
        const filePath = req.file ? req.file.path : null;
        const newResume= new Resume ({
            file:filePath,
        })
        
            await newResume.save();
            res.status(201).json({ message: "Resume created successfully!" });
    } catch (e) {
        console.error(e);  
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

module.exports=CreateResume;