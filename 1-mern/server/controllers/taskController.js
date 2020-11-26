const Task = require('../models/Task.js');
const Project = require('../models/Projects.js');
const { validationResult } = require('express-validator');

//Create task
exports.createTask = async (req, res) =>  {

    const errors = validationResult(req);
    if( !errors.isEmpty ()){
        return res.status(400).json({errors: errors.array()});
    }
    const { project } = req.body;

    try {
        const project_exist = await Project.findById(project);
        if (!project_exist){
            return res.status(404).json({msg: "project not found"})
        }

        
        if (project_exist.creator.toString() !== req.user.id){
            return res.status(401).json({msg:"No authorized"})
        }

        const task = new Task(req.body);
        await task.save();
        res.json({task})

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.getTasks = async (req, res) => {
    //req.query get params
    const { project } = req.query;
    try {
        const project_exist = await Project.findById(project);
        if (!project_exist){
            return res.status(404).json({msg: "project not found"})
        }

        if (project_exist.creator.toString() !== req.user.id){
            return res.status(401).json({msg:"No authorized"})
        }

        const tasks = await Task.find({ project }).sort({created_at: -1})
        res.json({ tasks });

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}

exports.updateTask = async (req, res) => {
    
    const { project, name, status } = req.body;

    try {
        const task_exist = await Task.findById(req.params.id)
        if (!task_exist){
            return res.status(404).json({msg:"Task dont exist"})
        }

        const project_exist = await Project.findById(project);
        if (project_exist.creator.toString() !== req.user.id){
            return res.status(401).json({msg:"No authorized"})
        }


        const new_task = {};
        new_task.name = name;
        new_task.status = status;

        let task = await Task.findOneAndUpdate({ _id:req.params.id}, new_task, {new:true})
        res.json({task})

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}


exports.deleteTask = async (req, res) => {
    
    const { project } = req.query;
    try {

        const task_exist = await Task.findById(req.params.id)

        if (!task_exist){
            return res.status(404).json({msg:"Task dont exist"})
        }

        const project_exist = await Project.findById(project);
        if (project_exist.creator.toString() !== req.user.id){
            return res.status(401).json({msg:"No authorized"})
        }

        await Task.findOneAndRemove({_id: req.params.id});
        res.json({msg: "Task deleted"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}