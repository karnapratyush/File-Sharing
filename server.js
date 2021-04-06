const express = require('express');
const app = express();



const { router }= require('./routes/upload')
const {downloadRouter}=require('./routes/download')

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get('/',(req, res)=>{
    res.send('hello')
})

app.use('/api/',router)
app.use('/downloads/',downloadRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})