import React from 'react';
import NewProject from '../projects/NewProject.jsx';
import ProjectList from '../projects/ProjectList.jsx';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Task</span></h1>

            <NewProject />

            <div className="proyectos"> 
                <h2>
                    Your projects
                </h2>
                <ProjectList />
            </div>
        </aside>
     );
}
 
export default Sidebar;