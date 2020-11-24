import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext.jsx';
import projectReducer from './projectReducer.jsx';
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types'



const ProjectProvider = props => {
    
    const projects = [
        { id:1, name:"P1"},
        { id:2, name:"P2"},
        { id:3, name:"P3"},
        { id:4, name:"P4"},
        { id:5, name:"P5"},
    ]

    
    const initialState = {
        projects : [],
        form: false,
        form_error:false,
        project: null
    };

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    const getProjects = () => {
        dispatch({
            type:GET_PROJECTS,
            payload: projects
        })
    }

    const addProject = project => {
        project.id = uuidv4();
        dispatch({
            type:ADD_PROJECTS,
            payload: project
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

    const deleteProject = project_id => {
        dispatch({
            type:DELETE_PROJECT,
            payload: project_id
        })
    }

    return(
        <projectContext.Provider
            value={{
                form:state.form,
                project:state.project,
                projects: state.projects,
                form_error:state.form_error,
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