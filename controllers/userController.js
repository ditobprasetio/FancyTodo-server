const { User } = require('../models')
const { getToken } = require('../helper/jwt')
const { comparePassword } = require('../helper/bcrypt')

class UserController{
  static register(req, res, next) {
    let { name, email, password} = req.body
    User.create({
      name,
      email,
      password
    })
    .then((user) => {
      let payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      let token = getToken(payload)
      res.status(201).json({ token })
    })
    .catch(next)
  }

  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if(user) {
        let status = comparePassword(req.body.password, user.password)
        if(status) {
          let payload = {
            id: user.id,
            name: user.name,
            email: user.email
          }
          let token = getToken(payload)
          res.status(200).json({token})
        }
        else {
          next({ name: 'email or password wrong' })
        }
      }
      else {
        next({ name: 'email or password wrong' })
      }
    })
    .catch(next)
  }
}

module.exports = UserController