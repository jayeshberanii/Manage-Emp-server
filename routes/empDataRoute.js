const { addEmployeeData, getEmployeeData, updateEmployeeData, deleteEmployeeData } = require('../controllers/empDataController')

const route=require('express').Router()

route.post('/',addEmployeeData)
route.get('/',getEmployeeData)
route.put('/:id',updateEmployeeData)
route.delete('/:id',deleteEmployeeData)

module.exports=route