const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    name: String,
    completed: Boolean
}, {
    timestamps:true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo