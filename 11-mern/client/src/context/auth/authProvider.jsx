import React, { useReducer } from 'react';
import authContext from './authContext.jsx';
import authReducer from './authReducer.jsx';
import {
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESSFULL_LOGIN,
    ERROR_LOGIN,
    LOGOUT
} from '../../types';

import axiosClient from '../../config/axios.js';
import tokenAuth from '../../config/tokenAuth.js';

const AuthProvider = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated:null,
        user:null,
        msg:null,
        loading:true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registerUser = async data => {
        await axiosClient.post('/api/users', data).then( res => {
            dispatch({
                type:SUCCESSFUL_REGISTRATION,
                payload:res.data
            })
            getUser();
        }).catch( err => {
            //console.log(err.response.data.msg);

            const alert = {
                msg: err.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: ERROR_REGISTRATION,
                payload: alert
            })
        })
    }

    const getUser = async () => {
        const token = localStorage.getItem('token');
        //if (token){
        tokenAuth(token);
        //}

        await axiosClient.get('/api/auth').then( res => {
            dispatch({
                type: GET_USER,
                payload: res.data.user
            })
        }).catch( err => {
            console.log(err)
            dispatch({
                type:ERROR_LOGIN
            })
        })


    }

    const userLogin = async data => {
        await axiosClient.post('/api/auth', data).then( res => {
            dispatch({
                type: SUCCESSFULL_LOGIN,
                payload: res.data
            })
            getUser();
        }).catch (err => {
            const alert = {
                msg: err.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: ERROR_LOGIN,
                payload: alert
            })
        })
    }

    const userLogout = async () => {
        dispatch({
            type:LOGOUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token:state.token,
                authenticated:state.authenticated,
                user:state.user,
                msg:state.msg,
                loading:state.loading,
                registerUser,
                userLogin,
                getUser,
                userLogout
            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthProvider;