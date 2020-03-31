const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/apiController')

router.get('/weather', ApiController.display)

module.exports = router