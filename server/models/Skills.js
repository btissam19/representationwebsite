const mongoose=require('mongoose');

const SkillsSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
      },

    category:{
            type:String,
            required:true},
    skills: [
    {
        file:{
            type:String,
            required:false 
        },
        technologie:{
                type:String,
                required:true}
    }
    ]
  
})


module.exports= mongoose.model('skills',SkillsSchema);
