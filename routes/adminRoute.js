const AdminController = require('../Controller/AdminController')

const express = require('express')

const router = express.Router()

router.post('/admin/register',AdminController.RegisterAdmin)
router.post('/admin/Login',AdminController.loginAdmin)

module.exports = router  