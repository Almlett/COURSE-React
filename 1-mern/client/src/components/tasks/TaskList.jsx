import React, { Fragment } from 'react'
import Task from './Task.jsx';

const TaskList = () => {

    const tasks = [
        { name: "Task 1", status:true},
        { name: "Task 2", status:true},
        { name: "Task 3", status:false},
        { name: "Task 4", status:true},
    ]
    return (
        <Fragment>
            <h2>Project: P1</h2>
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
            >
                Delete project &times;
            </button>
        </Fragment>
    );
}
 
export default TaskList;