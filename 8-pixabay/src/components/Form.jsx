import React, { useState } from 'react'
import Error from './Error.jsx';

const Form = ({setSearch}) => {

    const [term , setTerm] = useState('');
    const [error , setError] = useState(false);
    

    const searchImages = e => {
        e.preventDefault();

        if (term.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setSearch(term)
    }

    return ( 
        <form
            onSubmit={searchImages}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search a image, example: dev"
                        onChange={ e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>

            {
                error &&
                <Error 
                    message='add text to search'
                />
            }
        </form>
     );
}
 
export default Form;