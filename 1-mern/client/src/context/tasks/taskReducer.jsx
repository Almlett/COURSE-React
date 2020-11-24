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

export default (state, action) => {
    switch(action.type){
        case PROJECT_TASKS:
            return {
                ...state,
                project_tasks: state.tasks.filter(task => task.project_id === action.payload)
            }
        case ADD_TASK:
            return{
                ...state,
                tasks:[action.payload ,...state.tasks],
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
                tasks:state.tasks.filter( task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case STATE_TASK:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
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