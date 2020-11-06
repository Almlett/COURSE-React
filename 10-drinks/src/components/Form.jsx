import React, { useState, useContext } from 'react'
import { CategortiesContext } from '../context/CategoriesContext.jsx';
import { RecipesContext } from '../context/RecipesContext.jsx';


const Form = () => {

    const [search, setSearch] = useState({
        name:'',
        category:''
    })

    const {categories} = useContext(CategortiesContext);
    const {saveSearch, setConsult} = useContext(RecipesContext);

    const handleRecipe = e => {
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        });
    };

    return ( 
        <form className="col-12"
            onSubmit={e => {
                e.preventDefault();
                saveSearch(search);
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>
                    Search drinks by category or ingredient
                </legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="search by ingrediente"
                        onChange={handleRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleRecipe}
                    >
                        <option value="-">- select category -</option>
                        {
                            categories.map( category => (
                                <option 
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >{category.strCategory}</option>
                            ))
                        }

                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Search drinks"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;