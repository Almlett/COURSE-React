// eslint-disable-next-line
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case PROJECT_TASKS:
            return {
                ...state,
                project_tasks: action.payload,
            }
        case ADD_TASK:
            return{
                ...state,
                project_tasks:[action.payload ,...state.project_tasks],
                error_task:false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                error_task:true
            }
        case DELETE_TASK:
            return{
                ...state,
                project_tasks:state.project_tasks.filter( task => task._id !== action.payload)
            }
        case UPDATE_TASK:
            return{
                ...state,
                project_tasks: state.project_tasks.map(task => task._id === action.payload._id ? action.payload : task),
                error_task:false
            }
        case CURRENT_TASK:
            return {
                ...state,
                current_task: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                current_task: null
            }
          
        default:
            return state;
    }
}