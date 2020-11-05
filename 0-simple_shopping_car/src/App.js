import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Product from './components/Product'
import ShoppingCar from './components/ShoppingCar'

function App() {

  const [ products ] = useState([
    { id:1, name:"product1", cost:55},
    { id:2, name:"product2", cost:54},
    { id:3, name:"product3", cost:53},
    { id:4, name:"product4", cost:52},
    { id:5, name:"product5", cost:51},
  ]);

  const [shoppingCar, setShoppingCar] = useState([])

  return (
    <Fragment>
      <Header 
        title="Shop"
      /> 
      
      <h1>Product list</h1>
      {
        products.map(product => (
          <Product 
            key={product.id}
            product={product}
            shoppingCar={shoppingCar}
            setShoppingCar={setShoppingCar}/>
        ))
      }

      <ShoppingCar 
        shoppingCar={shoppingCar}
        setShoppingCar={setShoppingCar}/>
     
      <Footer />
    </Fragment>
  );
}

export default App;
