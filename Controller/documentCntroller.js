const documentModel = require("../Model/documentModel")
const documentSchema = require("../Model/documentModel")
// import multer
const multer = require("multer")

// location storage  distination  iyo file name req bananka  LALA MACAAMILAYO IYO CALLBACK FUNCTION  
const StorageLocation = multer.diskStorage({
    destination : (req,file, cb) =>{
        cb(null, "Alldocuments")
    },
    filename : (req,file, cb) =>{
        cb(null, file.originalname )
    }
})

const upload= multer({
    storage : StorageLocation


})


// APIS
// 1.post
const registerDocument = async(req, res) =>{
    const newDocument = await documentModel({
        file : req.file.filename
    })
    const savedDocument = newDocument.save()
    if(savedDocument)
    res.send(savedDocument)

}
// get
const getDocument = async (req, res)=> {
    const readDocument = await documentModel.find();
    if(readDocument){
      res.send(readDocument);
    }
  };









module.exports ={
    registerDocument, 
    upload,
    getDocument
}