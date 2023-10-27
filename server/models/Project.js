const mongoose=require('mongoose');

const ProjectSchema=mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
      },
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