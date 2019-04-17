const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  _userId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  toJSON: {
    virtuals: true
  }
})

TodoSchema.virtual('user', {
  ref: 'User',
  localField: '_userId',
  foreignField: '_id'
})

TodoSchema.statics.findByUserId = userId => {
  return Todo.find({ _userId: userId })
}

TodoSchema.statics.findOneByUserId = ({ id, userId }) => {
  return Todo.findOne({ _id: id, _userId: userId })
}

TodoSchema.statics.deleteOneByUserId = ({ id, userId }) => {
  return Todo.deleteOne({ _id: id, _userId: userId })
}

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo