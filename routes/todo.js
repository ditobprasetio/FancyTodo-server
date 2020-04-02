const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todoController')
const authorization = require('../middlewere/atuhorization')

router.post('/', TodoController.add)
router.get('/', TodoController.display)
router.get('/:id', authorization, TodoController.getById)
router.put('/:id', authorization, TodoController.update)
router.delete('/:id', authorization, TodoController.delete)

module.exports = router