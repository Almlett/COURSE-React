import React from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import RecipesList from './components/RecipesList.jsx';
import CategoriesProvider from './context/CategoriesContext.jsx';
import RecipesProvider from './context/RecipesContext.jsx';
import ModalProvider from './context/ModalContext.jsx';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
       <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
    
  );
}

export default App;
