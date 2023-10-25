const path =require('path')
const multer=require('multer')

const storage=multer.diskStorage({
     destination: (req,file,cb)=>{
      cb(null,'uploads/') 
    },
    filename: (req,file,cb)=>{
      let ext=path.extname(file.originalname)
      cb(null,Date.now() + ext);  // Use Date.now() 
   }
})

const upload=multer({
       storage:storage
})


module.exports =upload;