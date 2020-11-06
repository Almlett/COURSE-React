import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CategortiesContext = createContext();

const CategoriesProvider = (props) => {
    

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const result = await axios.get(url);
            setCategories(result.data.drinks)
        };
        getCategories();
        

    },[])

    return (
        <CategortiesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategortiesContext.Provider>
    )
}

export default CategoriesProvider;