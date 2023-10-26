const Contact=require('../models/Contact')


const CreateContact= async (req,res)=>{
      const {name, email,comment}=req.body;
      try {
        const message= new Contact({
            name,
            email,
            comment
          })
    
          await message.save()
          res.status(201).json({message:"message sende succsufully"})
        
      } catch (error) {
        console.log(error)
        
      }

}

module.exports=CreateContact;