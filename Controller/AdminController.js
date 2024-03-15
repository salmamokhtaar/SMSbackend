const adminModel = require('../Model/AdminModel')
// register model

const RegisterAdmin = async(req,res) => {
    const newAdmin = await adminModel(req.body)
    const saveAdmin = newAdmin.save()

    if (saveAdmin)
      res.send(saveAdmin)
    
}
// finding existing user in the database
const loginAdmin = async(req, res) => {
  const AdminData = await adminModel.findOne({
    username: req.body.username,
    password: req.body.password
  })
  if(AdminData){  
    res.send(AdminData)
}else{
  res.send({error: "Not Found"})
}
}
module.exports = {RegisterAdmin, loginAdmin}