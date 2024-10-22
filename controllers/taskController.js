const Task = require(`${__dirname}/../models/taskModel`);


exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
    
        res.status(200).json({
            data: tasks,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.getTask = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                msg: 'No task with this id'
            });
        }

        res.status(200).json({
            data: task
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            data: task,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);

        if (!task) {
            return res.status(404).json({
                msg: 'No task with this id'
            });
        }

        res.status(201).json({
            data: task,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

exports.deleteTask = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                msg: 'No task with this id'
            });
        }

        res.status(201).json({
            data: null,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}
