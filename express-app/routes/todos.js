const express = require('express')

const Todo = require('../models/todo')

const router = express.Router()

router.post('/', async (req, res) => {
  const { user, body: { title } } = req

  const newTodo = new Todo({
    title,
    _userId: user
  })

  await newTodo.save()

  res.send(newTodo)
})

router.get('/', async (req, res) => {
  const todos = await Todo.findByUserId(req.user).populate('user')

  res.send(todos)
})

router.get('/:id', async (req, res) => {
  const { params: { id }, user } = req

  const todo = await Todo.findOneByUserId({ id, userId: user }).populate('user')

  res.send(todo)
})

router.delete('/:id', async (req, res) => {
  const { params: { id }, user } = req

  const todo = await Todo.findOneByUserId({ id, userId: user })

  await todo.remove()

  res.status(204).end()
})

router.patch('/:id', async (req, res) => {
  const { params: { id }, user } = req
  const { title } = req.body

  const todo = await Todo.findOneByUserId({ id, userId: user })

  todo.title = title

  await todo.save()

  res.send(todo)
})

module.exports = router