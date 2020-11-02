import React, { Fragment, useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({setBudget, setRemaining, setShowQuestion}) => {

    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)

    const addBudget = e => {
        e.preventDefault();
        //validar
        if ( quantity < 1 || isNaN( quantity ) ){
            setError(true);
            return;
        }
        setError(false);
        setBudget(quantity)
        setRemaining(quantity)
        setShowQuestion(false)
    };

    return ( 
        <Fragment>
            <h2>
                What is your budget?
            </h2>
            {
                error && <Error message="An error ocurred"/>
            }

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="budget"
                    onChange={e => setQuantity( parseInt( e.target.value,10 ) )}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set budget"
                />
            </form>
        </Fragment>
     );
}
 

Question.propTypes = {
    setBudget:PropTypes.func.isRequired,
    setRemaining:PropTypes.func.isRequired,
    setShowQuestion:PropTypes.func.isRequired,
}

export default Question;