const mongoose=require('mongoose');

const ProjectSchema=mongoose.Schema({

        file:{
            type:String,
            required:false
        
        },
        projectName:{
            type:String,
            required:true
        },
        projectTechnologie:{
            type:String,
            required:true
        },
        projectDecription:{
            type:String,
            required:true
        }

})

module.exports= mongoose.model('project',ProjectSchema);