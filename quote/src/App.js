import React from 'react';
import Header from './components/Header.jsx';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`

function App() {
  return (
    <Container>
      <Header 
        title="Quote"
      />
      <FormContainer/>
    </Container>
  );
}

export default App;
