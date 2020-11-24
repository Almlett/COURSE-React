import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'
import { v4 as uuidv4 } from 'uuid';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

const TaskProvider = props => {
    const initialState = {
        tasks:[
            { id:1, name: "Task 1", status:true, project_id:1},
            { id:2, name: "Task 2", status:true, project_id:1},
            { id:3, name: "Task 3", status:false, project_id:2},
            { id:4, name: "Task 4", status:true, project_id:3},
            { id:5, name: "Task 5", status:true, project_id:2},
            { id:6, name: "Task 6", status:true, project_id:3},
            { id:7, name: "Task 7", status:false, project_id:4},
            { id:8, name: "Task 8", status:true, project_id:4},
            { id:9, name: "Task 9", status:true, project_id:1},
            { id:10, name: "Task 10", status:true, project_id:4},
            { id:11, name: "Task 11", status:false, project_id:2},
            { id:12, name: "Task 12", status:true, project_id:4},
            { id:13, name: "Task 13", status:true, project_id:1},
            { id:14, name: "Task 14", status:true, project_id:2},
            { id:15, name: "Task 15", status:false, project_id:2},
            { id:16, name: "Task 16", status:true, project_id:1},
        ],
        project_tasks:null,
        error_task:false,
        current_task:null,
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = project_id => {
        //PROJECT_TASKS
        dispatch({
            type:PROJECT_TASKS,
            payload:project_id
        })
    }

    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }

    const validateTask = () => {
        dispatch({
            type:VALIDATE_TASK,
        })
    }

    const deleteTask = task_id => {
        dispatch({
            type:DELETE_TASK,
            payload:task_id
        })
    }

    const updateTaskState = task => {
        dispatch({
            type:STATE_TASK,
            payload:task
        })
    }

    const setCurrentTask = task => {
        dispatch({
            type:CURRENT_TASK,
            payload:task
        })
    }

    const updateTask = task => {
        dispatch({
            type:UPDATE_TASK,
            payload:task
        })
    }

    const cleanCurrentTask = () => {
        dispatch({
            type:CLEAN_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                project_tasks:state.project_tasks,
                error_task:state.error_task,
                current_task:state.current_task,
                cleanCurrentTask,
                getProjectTasks,
                updateTaskState,
                setCurrentTask,
                validateTask,
                deleteTask,
                updateTask,
                addTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskProvider;