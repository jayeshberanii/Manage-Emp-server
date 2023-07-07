const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
dotenv.config()
app.use(cors())
require('./database/connection')
app.use(express.json({extended:true}))

app.get('/',(req,res)=>{
    res.json("hello from index page")
})

app.use('/api/empdata',require('./routes/empDataRoute'))

app.listen(process.env.PORT,()=>{
    console.log(`server is successfully run on ${process.env.PORT}`);
})