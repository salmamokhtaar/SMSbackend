const express = require('express')

const teacherController = require ("../Controller/teacherController")

const router = express.Router()
// post
router.post("/create/teacher", teacherController.createTeacher)
// search
router.get("/teacher/search/:key",teacherController.searchTeacher);
// get
router.get("/teacher/get", teacherController.getAllTeacher)
// update
router.put("/update/teacher/:id",teacherController.updateTeacher);
// delete
router.delete("/delete/teacher/:id",teacherController.deleteTeacher);
// total
router.get("/total/teacher", teacherController.getTotalofTeachers)
// totalSalary
router.get("/teacher/total/salary", teacherController.getTotalsalary)
// update single
router.get("/teacher/update/single/:id", teacherController.SinglegetUpdate)



module.exports = router;
