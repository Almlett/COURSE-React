import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext.jsx';
import TaskContext from '../../context/tasks/taskContext.jsx';

const Project = ({project}) => {
    //obtener el state del proyecto
    const projectState = useContext(ProjectContext);
    const { setProject } = projectState;

    //obtener el state de las tareas
    const taskState = useContext(TaskContext);
    const { getProjectTasks } = taskState;

    //agregar proyecto actual
    const setCurrentProject = project_id => {
        setProject(project_id);
        getProjectTasks(project_id);
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick= {()=> setCurrentProject(project._id)}
            >
                {project.name}
            </button>
        </li>
     );
}
 
export default Project;