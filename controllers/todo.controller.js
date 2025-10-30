const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    try {
        const createdModel = await TodoModel.create(req.body)
        res.status(201).json(createdModel);
    } catch(error) {
        next(error)
    }
}

const getTodos = async (req, res, next) => {
    const allTodos = await TodoModel.find({})
    res.status(200).json(allTodos)
}

const getTodoById = async (req, res, next) => {
    try {
        const todoModel = await TodoModel.findById(req.params.todoId);
        if (todoModel) {
            res.status(200).json(todoModel);
        } else {
            res.status(404).send();
        }
    } catch(error) {
        next(error)
    }
}

    const updateTodo = async (req, res, next) => {
        try {
            const updatedTodo = await TodoModel.findByIdAndUpdate(
                req.params.todoId,
                req.body,
                {
                    new: true,
                    useFindAndModify: false
                }
            )
            if (updatedTodo) {
                res.status(200).json(updatedTodo);
            } else {
                res.status(404).send();
            }
            res.status(200).json(updatedTodo);
        } catch(error){
            next(error)
        }
    }

const mongoose = require('mongoose');

deleteTodo = async (req, res, next) => {
    try {
        const { todoId } = req.params;

        if (!mongoose.isValidObjectId(todoId)) {
            return res.status(404).send();
        }

        const deletedTodo = await TodoModel.findByIdAndDelete(todoId);
        if (!deletedTodo) {
            return res.status(404).send();
        }
        return res.status(200).json(deletedTodo);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}