
const mongoose=require('mongoose')

// using dotenv file to get url
require('dotenv').config()

function connectDB(){
    mongoose.connect(process.env.mongoConnectionUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
    const connection=mongoose.connection;

    connection.once('open',()=>{
        console.log('DB connected');

    }).catch(err=>{
        console.log('Connection failed')
    })
}


module.exports={connectDB}