const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    name: String
}, {
    timestamps:true
})

const Todo = model('Todo', todoSchema)

module.exports = Todo