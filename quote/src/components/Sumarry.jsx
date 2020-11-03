import React from 'react';
import styled from '@emotion/styled';
import { getUpperCase } from '../helper.js';
import PropTypes from 'prop-types';

const ResumenContainer = styled.div`
    padding:1rem;
    text-align:center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Sumarry = ({ data }) => {

    const{ brand, year, plan} = data;

    if (brand === '' || year === '' || plan === '') return null;

    return ( 
        <ResumenContainer>
        <h2>Quote sumarry</h2>
            <ul>
                <li>Brand: {getUpperCase(brand)}</li>
                <li>Plan: {getUpperCase(plan)}</li>
                <li>Year: {year}</li>
            </ul>
        </ResumenContainer>
     );
}
 

Sumarry.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Sumarry;