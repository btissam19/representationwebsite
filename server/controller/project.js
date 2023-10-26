const Project=require('../models/Project')

const CreateProject = async (req, res) => {
    try {
        const {  projectName, projectTechnologie,  projectDecription} = req.body;
        const filePath = req.file ? req.file.path : null;
        const newProject= new Project ({
            projectName,
            projectTechnologie,
            projectDecription,
            file:filePath,
        })
        
            await newProject.save();
            res.status(201).json({ message: "Project created successfully!" });
    } catch (e) {
        console.error(e);  
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}
const getALLProject = async (req, res) => {
    try {
        const allProjects = await Project.find({}).exec();
        res.status(200).json(allProjects);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error", error: e.message });
    }
}

module.exports={CreateProject,getALLProject};