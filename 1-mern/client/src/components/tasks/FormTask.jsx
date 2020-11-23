import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext.jsx';

const FormTask = () => {

    const projectState = useContext(ProjectContext);
    const { project } = projectState;

    if (!project) return null;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primarui btn-submit btn-block"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;