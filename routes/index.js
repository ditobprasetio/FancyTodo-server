const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const todoRouter = require('./todo')
const apiRoute = require('./api')
const authentication = require('../middlewere/authentication')

router.use('/', userRouter)
router.use('/', apiRoute)
router.use(authentication)
router.use('/todos', todoRouter)

module.exports = router