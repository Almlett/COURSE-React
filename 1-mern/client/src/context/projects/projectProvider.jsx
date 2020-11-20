import React, { useReducer } from 'react';
import projectContext from './projectContext.jsx';
import projectReducer from './projectReducer.jsx';
import { PROJECT_FORM, GET_PROJECTS } from '../../types'


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
        form: false
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

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form:state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectProvider;