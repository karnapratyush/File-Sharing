  
const router = require('express').Router();

const multer=require('multer');
const path=require('path');
const {model} = require('../models/model');
const { v4: uuidv4 } = require('uuid');

//  creating a storage to store the file and giving it a name
let storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename: (req,file,cb)=>{
        const uniqueName=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;

        cb(null, uniqueName);
    }

})
//  defing storage and limit and how many files in a go

let upload=multer({
    storage,
    limit:{filesize:1000000*100}//size is in kb
}).single('myfile')



router.post('/', (req,res)=>{
    upload(req,res,async (err)=>{
       
        if(!req.file)
        {
            return res.send("error")
        }
        if (err){
            return res.status(500).send({error:err.message})
        }
        // creating a set in Mongodb
        const file=new model({
            filename:req.file.filename,
            uuid:uuidv4(),
            path:req.file.path,
            size:req.file.size
        })
        const response = await file.save();
        res.json({ downloadFileLink: `${process.env.APP_BASE_URL}/downloads/${response.uuid}`})
    
    
})
})

    




module.exports={router}

