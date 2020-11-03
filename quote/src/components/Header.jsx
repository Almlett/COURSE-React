import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderContent = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`
const H1Content = styled.h1`
    font-size:2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({ title }) => {
    return ( 
        <HeaderContent>
            <H1Content>{title}</H1Content>
        </HeaderContent>
     );
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;