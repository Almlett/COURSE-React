import React from 'react'
import Expense from './Expense'
import PropTypes from 'prop-types';

const ExpenseList = ({expenses}) => (
    <div className ="gastos-realizados">
        <h2>Expense List</h2>
        {expenses.map( expense => (
            <Expense
                key={expense.id}
                expense={expense}
            />
        ))}
    </div>
)
 
ExpenseList.propTypes = {
    expenses: PropTypes.array.isRequired
}
export default ExpenseList;