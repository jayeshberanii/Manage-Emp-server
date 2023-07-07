const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(res=>console.log("Database Connected Successfully:::"))
.catch(err=>console.log(err.message))
