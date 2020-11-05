import React, { Fragment } from 'react'
import { checkBudget } from '../helpers.js';
import PropTypes from 'prop-types';

const BudgetControl = ({budget, remaining}) => {
    return ( 
        <Fragment>
            <div className ="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className ={checkBudget(budget, remaining)}>
                Restante: $ {remaining}
            </div>
        </Fragment>
    );
}
 
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}
export default BudgetControl;