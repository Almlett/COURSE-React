import React, { useReducer } from 'react';
import projectContext from './projectContext.jsx';
import projectReducer from './projectReducer.jsx';
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types'
import axiosClient from '../../config/axios.js';


const ProjectProvider = props => {
    
    const initialState = {
        projects : [],
        form: false,
        form_error:false,
        project: null,
        msg:null
    };

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = async () => {

        await axiosClient.get('/api/projects').then(res => {
            dispatch({
                type:GET_PROJECTS,
                payload: res.data.projects
            })
        }).catch(err => {
            const alert = {
                msg: 'Error',
                category: 'alerta-error'
            }
            dispatch({
                type:PROJECT_ERROR,
                payload: alert
            })
        })
        
    }

    const addProject = async project => {

        await axiosClient.post('/api/projects', project).then( res => {
            dispatch({
                type:ADD_PROJECTS,
                payload: res.data
            })
        }).catch( err => {
            const alert = {
                msg: 'Error',
                category: 'alerta-error'
            }
            dispatch({
                type:PROJECT_ERROR,
                payload: alert
            })
        })
        

        
    }

    const showError = () =>{
        dispatch({
            type:VALIDATE_FORM
        })
    }

    const setProject = project_id => {
        dispatch({
            type:CURRENT_PROJECT,
            payload: project_id
        })
    }

    const deleteProject = async project_id => {
        await axiosClient.delete(`/api/projects/${project_id}`).then( res => {
            dispatch({
                type:DELETE_PROJECT,
                payload: project_id
            })
        }).catch( err => {
            const alert = {
                msg: 'Error',
                category: 'alerta-error'
            }
            dispatch({
                type:PROJECT_ERROR,
                payload: alert
            })
        })
        
    }

    return(
        <projectContext.Provider
            value={{
                form:state.form,
                project:state.project,
                projects: state.projects,
                form_error:state.form_error,
                msg:state.msg,
                showForm,
                showError,
                addProject,
                setProject,
                getProjects,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectProvider;