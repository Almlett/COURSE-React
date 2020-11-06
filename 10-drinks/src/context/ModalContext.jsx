import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios';


export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [ id_recipe, setIdRecipe] = useState(null);
    const [ recipe_info, setRecipe] = useState({})

    useEffect(() => {
        if (!id_recipe) return;
        const getRecipe = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id_recipe}`;
            const result = await axios.get(url);
            setRecipe(result.data.drinks[0])
        };
        getRecipe();
        
    }, [id_recipe]);

    return ( 
        <ModalContext.Provider
            value={{
                setIdRecipe,
                setRecipe,
                recipe_info
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;

