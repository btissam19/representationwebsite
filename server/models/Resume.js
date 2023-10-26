const mongoose=require('mongoose');

const ResumeSchema=mongoose.Schema({

        file:{
            type:String,
            required:false
           }

})

module.exports= mongoose.model('resumes',ResumeSchema);