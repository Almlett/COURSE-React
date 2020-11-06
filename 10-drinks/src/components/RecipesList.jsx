import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext.jsx';
import Recipe from './Recipe.jsx';
const RecipesList = () => {

    const { recipes } = useContext(RecipesContext);

    return ( 
        <div className="row mt-5">
            {
                recipes.map( recipe => (
                    <Recipe
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                ))
            }
        </div>
     );
}
 
export default RecipesList; 