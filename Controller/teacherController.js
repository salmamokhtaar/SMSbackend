const teacherModel = require("../Model/teacherModel");
// post
const createTeacher = async(req,res)=>{
    const newData =  await teacherModel(req.body)
    const saveData =  newData.save()
    if(saveData)
       res.send(saveData)
}
// get
const getAllTeacher = async(req, res)=>{
    const perPage = req.query.page || 0
    const numofTeachers= 5;
    const get= await teacherModel.find().skip(numofTeachers*perPage).limit(numofTeachers)
    if(get)
    res.send(get)
}
// put
const updateTeacher = async(req, res) => {
    const updateData = await teacherModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(updateData){
        res.send("updated Updated Teacher Succesfully")
    }
}
// delete
const deleteTeacher = async(req, res) => {
    const deleteData = await teacherModel.deleteOne(
        {_id: req.params.id}
    );
  
    if(deleteData){
        res.send("Deleted Teacher...")
    }
}

// // single get

// search
const searchTeacher = async(req, res) => {
    
    const SearchData = await teacherModel.find({
        $or:[
            {name: {$regex: req.params.key}}
        ]
    })
    if(SearchData)
     res.send(SearchData)

}
const SinglegetUpdate= async (req, res) => {
    const singleData = await teacherModel.find(
        {_id : req.params.id}
        )
    if(singleData)
    res.send(singleData)
  }
// total teachers getting all teachers
const getTotalofTeachers = async (req,res) => {
    const total = await teacherModel.find().countDocuments()
    if(total){
    res.send({total})
    }
}

// totalsalary
const getTotalsalary = async (req, res) => {
    const totalSalary = await teacherModel.aggregate([
        {
            $group : {_id: null, salary:{$sum: "$salary"}}
        }
    ])
    if(totalSalary)
    res.send(totalSalary)
}


module.exports = {
    createTeacher, 
    getAllTeacher,
    updateTeacher,
    deleteTeacher ,
    searchTeacher,
    getTotalofTeachers,
    SinglegetUpdate,
    getTotalsalary
    
};
