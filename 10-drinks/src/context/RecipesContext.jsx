import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
 
    const [recipes, setRecipes] = useState([]);
    const [search, saveSearch] = useState({
        name:'',
        category:''
    });
    const [consult, setConsult] = useState(false);

    useEffect( () =>{
        if (consult){
            const getRecipes = async () => {
                const { name, category} = search;
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                console.log(url)
                const result = await axios.get(url);
                setRecipes(result.data.drinks)
            }
            getRecipes();
        }
    },[search])

    return ( 
        <RecipesContext.Provider
            value={{
                saveSearch,
                setConsult,
                recipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
     );
}
 
export default RecipesProvider;