const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://localhost:27017/SMS").then(()=>{
    console.log("Database connection established")
}).catch((err) => console.log(err))

const teacherRoute = require('./routes/teacherRoute')
const studentRoute = require("./routes/studentRouter")
const documentRoute = require('./routes/documentRoute')
const adminRoute = require('./routes/adminRoute')
app.use(teacherRoute)
app.use(studentRoute);
app.use(documentRoute)

app.use(adminRoute);
app.use("alldocs", express.static("Alldocuments"));


app.listen(5000 , () => console.log("Server is Runing on port 5000")) 