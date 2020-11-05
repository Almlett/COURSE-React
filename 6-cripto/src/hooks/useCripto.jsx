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


const useCripto = (label, initialState, options) => {
    
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
                <option value=''>- select a cripto coin -</option>
                {
                    options.map( option => (
                        <option 
                            key={option.CoinInfo.Id}
                            value={option.CoinInfo.Name}>
                                {option.CoinInfo.FullName}
                         </option>
                    ))
                }
            </SelectComponent>
        </Fragment>
    );

    return [state, select, setState];

}

export default useCripto;