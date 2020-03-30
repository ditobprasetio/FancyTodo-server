function errorHandler(err, req, res, next) {
  let status = 500
  let errName = {
    message: 'Internal Server Error'
  }
  if(err.name === 'SequelizeValidationError') {
    status = 400;
    let arrMessage = []
    for(let i=0; i<err.errors.length ; i++) {
      arrMessage.push(err.errors[i].message)
    }
    errName = {
      message: 'Bad Request',
      errors: arrMessage
    }
  }
  else if(err.name === 'Todo not found') {
    status = 404;
    errName = {
      message: 'Todo not found',
      errors: [err.name]
    }
  }
  else if(err.name === 'email or password wrong') {
    status = 400;
    errName = {
      message: 'email or password wrong',
      errors: [err.name]
    }
  }
  else if(err.name === 'Not Atuhorized') {
    status = 400;
    errName = {
      message: 'Not Atuhorized',
      errors: [err.name]
    }
  }
  res.status(status).json(errName)
}

module.exports = errorHandler