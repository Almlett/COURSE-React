// eslint-disable-next-line
import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case PROJECT_FORM:
            return {
                ...state,
                form:true
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects:action.payload
            };
        case ADD_PROJECTS:
            return {
                ...state,
                projects:[...state.projects, action.payload],
                form:false,
                form_error:false
            };
        case VALIDATE_FORM:
            return{
                ...state,
                form_error:true
            }
        case CURRENT_PROJECT:
            return{
                ...state,
                project: state.projects.filter(project => project._id === action.payload)[0]
            }
        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload),
                project:null
            }
        case PROJECT_ERROR:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
}