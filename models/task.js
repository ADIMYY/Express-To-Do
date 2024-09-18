const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: [true, 'task must have a title']
    }, 
    description: {
        type: 'string'
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;