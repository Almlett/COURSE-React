import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Sumarry from './components/Sumarry.jsx';
import Result from './components/Result.jsx';
import Spinner from './components/Spinner.jsx';
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

  const [ loading, setLoading] = useState( false)

  const { data, quote } = summary;
  return (
    <Container>
      <Header 
        title="Quote"
      />
      <FormContainer>
          <Form 
            setSumarry={setSumarry}
            setLoading={setLoading}
          />
          
          {loading 
            ? <Spinner />
            : <Sumarry 
                data={data}
              />
          }
          {
            !loading &&
            <Result 
              quote={quote}
            />
          }
          
      </FormContainer>
    </Container>
  );
}

export default App;
