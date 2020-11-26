// eslint-disable-next-line
import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESSFULL_LOGIN,
    ERROR_LOGIN,
    LOGOUT
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state,action) => {
    switch(action.type){
        case SUCCESSFULL_LOGIN:
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated:true,
                msg:null,
                loading:false
            }
        case LOGOUT:
        case ERROR_LOGIN:
        case ERROR_REGISTRATION:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                user:null,
                authenticated:null,
                msg:action.payload,
                loading:false
            }
        case GET_USER:
            return {
                ...state,
                authenticated:true,
                user: action.payload,
                loading:false
            }
        
        default:
            return state;
    }
}