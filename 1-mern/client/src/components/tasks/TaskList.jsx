import React, { Fragment, useContext } from 'react'
import Task from './Task.jsx';
import ProjectContext from '../../context/projects/projectContext.jsx';
import TaskContext from '../../context/tasks/taskContext.jsx';

const TaskList = () => {

    const projectState = useContext(ProjectContext);
    const { project, deleteProject } = projectState;

    //obtener el state de las tareas
    const taskState = useContext(TaskContext);
    const { project_tasks } = taskState;

    if (!project) return <h2>Select a project</h2>

    const tasks = project_tasks;

    const handleDelete = () => {
        deleteProject(project._id);
    }

    return (
        <Fragment>
            <h2>Project: {project.name}</h2>
            <ul className="listado-tarea">
                {
                    tasks.length === 0 ?
                    (
                        <li className="tarea">No tasks</li>
                    )
                    :
                        tasks.map(task => (
                                <Task
                                key={task._id}
                                    task={task}
                                />
                        ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={ handleDelete }
            >
                Delete project &times;
            </button>
        </Fragment>
    );
}
 
export default TaskList;