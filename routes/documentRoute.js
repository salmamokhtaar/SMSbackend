const express = require('express')
const documentCntroller = require('../Controller/documentCntroller')
const {registerDocument,upload} = require('../Controller/documentCntroller')

const router   = express.Router()

router.post("/teacher/documents", upload.single("file"), registerDocument)
router.get("/teacher/read",documentCntroller.getDocument )

module.exports = router