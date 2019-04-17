const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const config = require('../config')
const User = require('../models/user')

const router = express.Router()

router.get('/test',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req)
    res.end()
  }
)

router.post('/register', async (req, res, next) => {
  const { email, password } = req.body

  const passwordHash = await User.generatePasswordHash(password)

  console.log(passwordHash)

  const user = new User({
    email,
    password: passwordHash
  })

  await user.save()

  res.send(user)
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(403).end()
  }

  if (!user.comparePassword(password)) {
    return res.status(403).end()
  }

  const payload = {
    userId: user._id
  }

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 10000 })

  res.send({ token })
})

module.exports = router