import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled';

const LabelComponent = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectComponent = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    font-size:1.2rem;
`;


const useCoin = (label, initialState, options) => {
    
    const [state, setState] = useState(initialState);

    const select = () => (
        <Fragment>
            <LabelComponent>
                {label}
            </LabelComponent>
            <SelectComponent
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value=''>- select a coin -</option>
                {
                    options.map( option => (
                        <option 
                            key={option.code}
                            value={option.code}>
                                {option.name}
                         </option>
                    ))
                }
            </SelectComponent>
        </Fragment>
    );

    return [state, select, setState];

}

export default useCoin;