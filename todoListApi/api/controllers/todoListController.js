'use strict';

let mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
    try {
        Task.find({})
            .then(tasks => res.json(tasks))
    } catch (err) {
        res.send(err);
    }
};

exports.create_a_task = function(req, res) {
    let new_task = new Task(req.body);

    try {
        new_task.save()
            .then(task => res.json(task));
    } catch (err) {
        res.send(err);
    }
};

exports.read_a_task = function(req, res) {
    try {
        Task.findById(req.params.taskId)
            .then(task => res.json(task));
    } catch (err) {
        res.send(err);
    }
};

exports.update_a_task = function(req, res) {
    try {
        Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true})
            .then(task => res.json(task));
    } catch (err) {
        res.send(err);
    }
};

exports.delete_a_task = function(req, res) {
    try {
        Task.findByIdAndDelete({
            _id: req.params.taskId
        }).then(task => res.json(task));
    } catch (err) {
        res.send(err);
    }
};