import React from 'react';
import Question from './components/Question.jsx';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        
      </header>
        <div className="contenido-principal contenido">
          <Question />
        </div>
    </div>
    
  );
}

export default App;
