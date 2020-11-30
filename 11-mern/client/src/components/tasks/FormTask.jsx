import React, { useState, useEffect, useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext.jsx';
import TaskContext from '../../context/tasks/taskContext.jsx';

const FormTask = () => {

    const projectState = useContext(ProjectContext);
    const { project } = projectState;

    //obtener el state de las tareas
    const taskState = useContext(TaskContext);
    const { error_task, 
            current_task,
            addTask,
            getProjectTasks,
            validateTask,
            updateTask,
            cleanCurrentTask
        } = taskState;

    

    const [task, setTask] = useState({
        name:''
    })

    //effect que detecta si hay tarea seleccionada
    useEffect(() => {
        if (current_task){
            setTask(current_task)
        }else{
            setTask({name:''})
        }
    },[current_task])

    

    const { name } = task;

    if (!project) return null;
    
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (name.trim() === ''){
            validateTask();
            return;
        }

        if (current_task){
            updateTask(task);
            cleanCurrentTask();
        }else{
            task.project = project._id;
            addTask(task);
        }
        getProjectTasks(project.id);
        setTask({
            name:''
        });
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primarui btn-submit btn-block"
                        value={current_task ? "Edit task" : "Add task"}
                    />
                </div>
            </form>
            {
                error_task&&
                <p className="mensaje error"> Task name is required</p>
            }
        </div>
     );
}
 
export default FormTask;