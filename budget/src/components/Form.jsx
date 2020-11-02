import React, { useState } from 'react'
import Error from './Error.jsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({addExpense, setCreateExpense}) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)

    const setExpense = e=> {
        e.preventDefault();
        if ( quantity < 1 || isNaN( quantity ) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        const expense = {
            name,
            quantity,
            id:shortid.generate()
        };
        addExpense(expense);
        setCreateExpense(true)
        setQuantity(0);
        setName('');
    };

    return ( 
        <form
            onSubmit={setExpense}
        >
            <h2>Set expenses here</h2>
            {
                error &&
                <Error message="Incorrect expense" />
            }
            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Example transport"
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Expense quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={quantity}
                    onChange={ e => setQuantity(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="set expense"
            />
        </form>
     );
}
 
Form.propTypes = {
    addExpense:PropTypes.func.isRequired,
    setCreateExpense:PropTypes.func.isRequired,
}
export default Form;
