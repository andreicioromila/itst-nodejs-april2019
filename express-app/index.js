const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

const config = require('./config')
const usersRouter = require('./routes/users')
const todosRouter = require('./routes/todos')

const configurePassport = require('./passport-config')
configurePassport(passport)

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useCreateIndex: true })

mongoose.connection.on('connected', () => {
  console.log('DB connection successful')
})

mongoose.connection.on('error', err => {
  console.log('Error while connecting to db')
  console.error(err)
})

const app = express()

app.use(express.json())
app.use(logger)

app.use('/users', usersRouter)
app.use('/todos', passport.authenticate('jwt', { session: false }), todosRouter)

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`)
})

function logger (req, res, next) {
  console.log(`${req.method} ${req.path}`)
  next()
}
