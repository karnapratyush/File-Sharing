const downloadRouter=require('express').Router()

const {model}=require('../models/model')


downloadRouter.get('/:uuid',async(req,res)=>{
    try
    {
        const file=await model.findOne({uuid:req.params.uuid})
        if (!file)
        {
            res.json({error: "could not find the file"})
        }
        else 
        {
            filePath=`${__dirname}+/../${file.path}`;
            res.download(filePath);
        }

    }
    catch(err)
    {
        res.send({error:err})
    }

})

module.exports={downloadRouter}

