const express = require('express');

const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} = require(`${__dirname}/../controllers/taskController`);

const router = express.Router();

router
    .route('/')
    .get(getAllTasks)
    .post(createTask);

router
    .route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

module.exports = router;
