import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext.jsx';

const Project = ({project}) => {
    const projectState = useContext(ProjectContext);
    const { setProject } = projectState;
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick= { () => setProject(project.id)}
            >
                {project.name}
            </button>
        </li>
     );
}
 
export default Project;