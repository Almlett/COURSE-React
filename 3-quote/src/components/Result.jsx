import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const MessageComponent = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const QuoteText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0;
    
    text-align: center;
`;

const QuoteResult = styled.div`
    text-align:center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position:relative;

`;

const Result = ({quote}) => {

    if (quote === 0) return null;
    return ( 
        (quote === 0) 
        ? <MessageComponent>Please provider Brand, Year and Plan</MessageComponent>
        : <QuoteResult>
            <QuoteText>The total is: $ <span>{quote}</span></QuoteText>
          </QuoteResult>
     );
}

Result.propTypes = {
    quote: PropTypes.number.isRequired,
}
 
export default Result;