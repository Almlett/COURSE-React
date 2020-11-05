import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png'
import Form from './components/Form.jsx';
import Quote from './components/Quote.jsx';
import Spinner from './components/Spinner.jsx';
import axios from 'axios';

const ContainerComponent = styled.div`
  max-width:900px;
  margin: 0 auto;
  @media (min-width:600px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`;

const ImageComponent = styled.img`
  max-width:100%;
  margin-top: 5rem;
`;

const HeadingComponent = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align:left;
  font-weight:700;
  font-size:50px;
  margin-bottom:50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height:6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [coin, setCoin ] = useState('');
  const [cripto, setCripto ] = useState('');
  const [result, setResult ] = useState({});
  const [loading, setLoading ] = useState(false);

  useEffect(() => {
    if (coin === '') return;
    
    const QuoteCripto = async () => {

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${coin}`;
      const result = await axios.get(url);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult(result.data.DISPLAY[cripto][coin]);
      }, 3000);
    }
    QuoteCripto()

  }, [coin, cripto]);

  return (
    <ContainerComponent>
      <div>
        <ImageComponent 
          src={image}
          alt="Cripto image"  
        />
      </div>
      <div>
        <HeadingComponent>
          Cripto Quote
        </HeadingComponent>
        <Form 
          setCoin={setCoin}
          setCripto={setCripto}
        />
        {
          loading 
          ? <Spinner />
          : <Quote 
              result={result}
            />
        }
        
      </div>
    </ContainerComponent>
  );
}

export default App;
