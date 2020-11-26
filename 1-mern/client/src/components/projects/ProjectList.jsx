import React, { useContext, useEffect } from 'react';
import Project from './Project.jsx';
import projectContext from '../../context/projects/projectContext.jsx';
import AlertContext from '../../context/alerts/alertContext.jsx';
const ProjectList = () => {
    
    const projectState = useContext(projectContext);
    const {msg, projects, getProjects} = projectState;

    const alertState = useContext(AlertContext);
    const {alert, showAlert} = alertState;

    useEffect( () => {

        if (msg){
            showAlert(msg.msg, msg.category);
        }

        getProjects();
    // eslint-disable-next-line
    },[msg]);

    if (projects.length === 0) return <p>no projects</p>;
    
    return ( 
        <ul className="listado-proyectos">

            {
                alert &&
                (   
                <div className={`alerta ${alert.category}`}>
                {alert.msg}
                </div>
                )
            }
            {
                projects.map(project => (
                    <Project 
                    key={project._id}
                        project={project}
                    />
                ))
            }
        </ul>
     );
}
 
export default ProjectList;