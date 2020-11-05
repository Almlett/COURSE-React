import React from 'react'
import styled from '@emotion/styled';

const QuoteComponent = styled.div`
    color: #FFF;
`;

const PComponent = styled.p`
    font-size: 18 px;

    span {
        font-weight:bold;
    }
`;

const PriceComponent = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`;

const Quote = ({result}) => {

    if (Object.keys(result).length === 0) return null;

    return ( 
        <QuoteComponent>
            <PriceComponent>The price is: <span>{result.PRICE}</span></PriceComponent>
            <PComponent>Highest price of the day: <span>{result.HIGHDAY}</span></PComponent>
            <PComponent>Lowest price of the day: <span>{result.LOWDAY}</span></PComponent>
            <PComponent>Variation last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></PComponent>
            <PComponent>Last update: <span>{result.LASTUPDATE}</span></PComponent>
        </QuoteComponent>
     );
}
 
export default Quote;