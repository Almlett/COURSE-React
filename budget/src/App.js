import React, { useState, useEffect } from 'react';
import Question from './components/Question.jsx';
import Form from './components/Form.jsx'
import ExpenseList from './components/ExpenseList.jsx';
import BudgetControl from './components/BudgetControl.jsx';

function App() {

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, addExpense ] = useState({});
  const [createExpense, setCreateExpense ] = useState(false);

  useEffect( () => {
    if (createExpense){
      setExpenses([
        ...expenses,
        expense
      ]);

      const remainingBudget = remaining - expense.quantity;
      setRemaining(remainingBudget)

      setCreateExpense(false)
    }
  }, [expense, createExpense, expenses,remaining])


  return (
    <div className="container">
      <header>
        <h1>Budget</h1>
        
      </header>
        <div className="contenido-principal contenido">
          { showQuestion ?
              <Question 
                setBudget={setBudget}
                setRemaining={setRemaining}
                setShowQuestion={setShowQuestion}
              />
            :
              <div className="row">
                <div className="one-half column">
                  <Form 
                    addExpense={addExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <ExpenseList 
                    expenses={expenses}
                  />
                  <BudgetControl 
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
          }
        </div>

        
    </div>
    
  );
}

export default App;
