const { Todo } = require('../models')

class TodoController{
  static add(req, res, next) {
    let { title, description, status, due_date } = req.body
    Todo.create({
      title,
      description,
      status,
      due_date,
      UserId: req.currentUserId
    })
    .then((todo) => {
      res.status(201).json({todo})
    })
    .catch(next)
  }

  static display(req, res, next) {
    Todo.findAll()
    .then((todo) => {
      res.status(200).json(todo)
    })
    .catch(next)
  }

  static getById(req, res, next) {
    let id = req.params.id
    Todo.findByPk(id)
    .then((todo) => {
      if(todo) {
        res.status(200).json(todo)
      }
      else {
        next({ name: `Todo not found` })
      }
    })
    .catch(next)
  }

  static update(req, res, next) {
    let id = req.params.id
    let { title, description, status, due_date } = req.body
    Todo.update({
      title,
      description,
      status,
      due_date
    }, {
      where: {
        id: id
      },
      returning: true
    })
    .then((data) => {
      if(data[1]) {
        res.status(200).json({data: data[1][0]})
      }
      else{
        next({ name: `Todo not found` })
      }
    })
    .catch(next)
  }

  static delete(req, res, next) {
    let id = req.params.id
    let deletedTodo;
    Todo.findByPk(id)
    .then((todo) => {
      if(todo) {
        deletedTodo = todo
        return Todo.destroy({
          where: {
            id: id
          }
        })
      }
      else {
        next({name: 'Todo not found'})
      }
    })
    .then(result => {
      if(result) {
        res.status(200).json(deletedTodo)
      }
      else {
        next({name: 'Todo not found'})
      }
    })
    .catch(next)
  }
}

module.exports = TodoController