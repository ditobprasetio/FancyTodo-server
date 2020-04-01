require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routes/index')
const errorHandler = require('./middlewere/errorhandler')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Lintening on PORT ${PORT}`)
})