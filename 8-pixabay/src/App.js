import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.jsx';
import ImageList from './components/ImageList.jsx';

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect( () => {
    if (search === '') return;

    const ConsultAPI = async () => {
      const imagePerPage = 30;
      const API_KEY = '11472072-424841c62e89511587224c014';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&per_page=${imagePerPage}&page=${page}`;

      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits)
      const totalPages = Math.ceil(result.totalHits / imagePerPage);
      setPages(totalPages === 0 ? 1: totalPages)

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior:'smooth'})
      
    };
    ConsultAPI();
  }, [search,page])

  const previousPage = () => {
    const newActualPage = page - 1 > 0 ? page - 1 : 1;
    setPage(newActualPage)
  };
  const nextPage = () => {
    const newActualPage = page + 1 < pages ? page + 1 : pages;
    setPage(newActualPage)
  };

  

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Image search
        </p>
        <Form 
          setSearch={setSearch}
        />

        
      </div>

      
        
        <div className="row justify-content-center">
          <ImageList 
            images={images}
          />
          { pages !== 1 &&
            <Fragment>
              { page !== 1 &&
                <button
                  type="button"
                  className="btn btn-info mr-1"
                  onClick={previousPage}
                >
                  &laquo; Previous 
                </button>
              }

              { page !== pages &&
                <button
                  type="button"
                  className="btn btn-info "
                  onClick={nextPage}
                >
                  Next &raquo;
                </button>
              }
            </Fragment>
          }

        </div>

    </div>
  );
}

export default App;
