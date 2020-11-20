import React from 'react'
import Sidebard from '../layout/Sidebar.jsx';
import Header from '../layout/Header.jsx';
import FormTask from '../tasks/FormTask.jsx';
import TaskList from '../tasks/TaskList.jsx';

const Projects = () => {
   
    return ( 
        <div className="contenedor-app">
            <Sidebard /> 


            <div className="seccion-principal">
                <Header />                
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                            <TaskList />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;