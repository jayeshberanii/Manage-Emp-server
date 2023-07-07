const { addEmployeeData, getEmployeeData } = require('../controllers/empDataController')

const route=require('express').Router()

route.post('/',addEmployeeData)
route.get('/',getEmployeeData)

module.exports=route