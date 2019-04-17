const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

UserSchema.statics.generatePasswordHash = function (password) {
  return bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
}

const User = mongoose.model('User', UserSchema)

module.exports = User