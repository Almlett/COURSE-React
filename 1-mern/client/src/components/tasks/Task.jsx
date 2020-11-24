import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext.jsx';
import TaskContext from '../../context/tasks/taskContext.jsx';

const Task = ({task}) => {
    const projectState = useContext(ProjectContext);
    const { project } = projectState;
    //obtener el state de las tareas
    const taskState = useContext(TaskContext);
    const { deleteTask, getProjectTasks, updateTaskState, setCurrentTask } = taskState;

    const handleDelete = id => {
        deleteTask(id);
        getProjectTasks(project.id);
    }

    const handleState = task => {
        task.status = !task.status;
        updateTaskState(task);
        getProjectTasks(project.id);
    }

    const handleSelectTask = task => {
        setCurrentTask(task)
    }

    return ( 
        <li className="tarea sombra">
            <p>
                {task.name}
            </p>
            <div className="estado">
                {
                    task.status?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => handleState(task)}
                        >Complete</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => handleState(task)}
                        >Incomplete</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => handleSelectTask(task)}
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleDelete(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
 
export default Task;