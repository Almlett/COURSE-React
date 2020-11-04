import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Error from './components/Error.jsx';
import Weather from './components/Weather.jsx';

function App() {

  const [search, setSearch] = useState({
    city:'',
    country:''
  })

  const [consult, setConsult] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const { city, country } = search;

  useEffect(() => {
    if (consult){
      const consultAPI = async () => {

        const APIKey = '7de5c445e7ffbd3f586d136efa18d5e7';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`;

        const response = await fetch(url);
        const result = await response.json();
        setResult(result)
        if (result.cod === "404"){
          setError(true)
        }else{
          setError(false)
        }
      };

      consultAPI();
      setConsult(false)
    }
  },[consult]);

  let Component;
  if (error){
    Component = <Error 
      message="No result"
    />
  }else{
    Component = <Weather 
      result={result}
    />
  }
  
  
  return (
    <Fragment>
      <Header 
        title="Weather"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
              <div className="col m6 s12">
                <Form 
                  search={search}
                  setSearch={setSearch}
                  setConsult={setConsult}
                />
              </div>
              <div className="col m6 s12">
                  {Component}
              </div>
          </div>
        </div>
      </div>
      
        
    </Fragment>
  );
}

export default App;
