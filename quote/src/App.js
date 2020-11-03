import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Sumarry from './components/Sumarry.jsx';
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

  const [ summary, setSumarry ] = useState({
    quote:0,
    data:{
      brand:'',
      year:'',
      plan:''
    }
  });

  const { data } = summary;
  return (
    <Container>
      <Header 
        title="Quote"
      />
      <FormContainer>
          <Form 
            setSumarry={setSumarry}
          />
          <Sumarry 
            data={data}
          />
      </FormContainer>
    </Container>
  );
}

export default App;
