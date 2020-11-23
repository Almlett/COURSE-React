import React, { Fragment, useContext } from 'react'
import Task from './Task.jsx';
import ProjectContext from '../../context/projects/projectContext.jsx';

const TaskList = () => {

    const projectState = useContext(ProjectContext);
    const { project, deleteProject } = projectState;

    if (!project) return <h2>Select a project</h2>

    const tasks = [
        { name: "Task 1", status:true},
        { name: "Task 2", status:true},
        { name: "Task 3", status:false},
        { name: "Task 4", status:true},
    ]

    const handleDelete = () => {
        deleteProject(project.id);
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
                                key={task.name}
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