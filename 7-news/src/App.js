import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import NewsList from './components/NewsList.jsx';

function App() {

  const [category, setCategory] = useState('');
  const [news_list, setNewsList] = useState([]);

  useEffect( () => {
    const ConsultAPI = async () => {
      const API_KEY = 'c9bfd782461840159bdcc8d796cb11c8';
      const url =`http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

      const response = await fetch(url);
      const result = await response.json();
      setNewsList(result.articles);
    };
    ConsultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header 
        title="News"
      />

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
        <NewsList 
          news_list={news_list}
        />
      </div>
    </Fragment>
  );
}

export default App;
