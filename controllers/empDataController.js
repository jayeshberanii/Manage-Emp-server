const EmpDetails = require("../models/empDataModel")

//add employee data
const addEmployeeData=async(req,res)=>{    
    try {
        await EmpDetails.insertMany(req.body)
        res.status(200).json({msg:"Details Saved Successfully:::"})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
 
//get employee data
const getEmployeeData=async(req,res)=>{    
    try {
       const data= await EmpDetails.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={
    addEmployeeData,
    getEmployeeData
}