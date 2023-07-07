const mongoose=require('mongoose')

const empDetailSchema=new mongoose.Schema({
    EmployeeID:{
        type:String
    },
    EmployeeName:{
        type:String
    },
    EmployeeStatus:{
        type:String
    },
    JoiningDate:{
        type:Date
    },
    BirthDate:{
        type:Date
    },
    Skills:{
        type:String
    },
    SalaryDetails:{
        type:Number
    },
    Address:{
        type:String
    },

},{timestamps:true})

const EmpDetails=new mongoose.model("EmpDetails",empDetailSchema)
module.exports=EmpDetails