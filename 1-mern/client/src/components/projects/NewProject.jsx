import React, { Fragment, useState, useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext.jsx';
const NewProject = () => {

    const projectState = useContext(ProjectContext);
    const {form, showForm} = projectState;

    const [project, setProject] = useState({
        name: ''
    });

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    const {name} = project;

    const handleSubmit = e => {
        e.preventDefault();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => showForm()}
            >
                New project
            </button>

            {
                form &&
            
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Project name"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                    />

                    <input 
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Add project"
                    />

                </form>
            }
        </Fragment>
     );
}
 
export default NewProject;