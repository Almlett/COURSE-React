import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer'
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';
import axiosClient from '../../config/axios.js';

const TaskProvider = props => {
    const initialState = {
        project_tasks:[],
        error_task:false,
        current_task:null,
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = async project => {
        await axiosClient.get('/api/tasks', {params: {project}}).then(res => {
            dispatch({
                type:PROJECT_TASKS,
                payload:res.data.tasks
            })
        }).catch( err => {

        });
        //PROJECT_TASKS
        
    }

    const addTask = async task => {
        await axiosClient.post('/api/tasks', task).then(res => {
            dispatch({
                type:ADD_TASK,
                payload:task
            })
        }).catch( err => {

        });
        
    }

    const validateTask = () => {
        dispatch({
            type:VALIDATE_TASK,
        })
    }

    const deleteTask = async (task_id, project) => {
        
        await axiosClient.delete(`/api/tasks/${task_id}`, {params: {project}}).then(res => {
            dispatch({
                type:DELETE_TASK,
                payload:task_id
            })
        }).catch( err => {

        });
        
    }

    const updateTask = async task => {
        await axiosClient.put(`/api/tasks/${task._id}`, task).then(res => {
            dispatch({
                type:UPDATE_TASK,
                payload:res.data.task
            })
        }).catch( err => {
        });
        
    }

    const setCurrentTask = task => {
        dispatch({
            type:CURRENT_TASK,
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