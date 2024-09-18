const express = require('express');

const Task = require(`${__dirname}/../models/task`);

const router = express.Router();

router.get('/tasks', async(req, res) => {
    try {
        const tasks = await Task.find();
    
        res.status(200).json({
            data: tasks
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});


router.post('/task', async (req, res) => {
    try {
        const task = await Task.create(req.body);
    
        res.status(201).json({
            status: 'success', 
            task
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

router.put('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!task) {
            return res.status(404).json({
                message: 'No document found with this ID'
            });
        };
    
        res.status(200).json({
            status: 'success', 
            task
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: 'No document found with this ID'
            });
        };
    
        res.status(200).json({
            status: 'success', 
            data: null
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router;