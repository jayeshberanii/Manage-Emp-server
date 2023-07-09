const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(res=>console.log("Database Connected Successfully:::"))
.catch(err=>console.log(err.message))
//  const {Client}=require('pg')
//   const client=new Client({
//     host:"localhost",
//     user:"",
//     port:"",
//     password:"",
//     database:""
//   })