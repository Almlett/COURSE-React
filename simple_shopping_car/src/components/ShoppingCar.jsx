import React from 'react';
import './shoppingCar.css'
import Product from './Product'

const ShoppingCar = ({shoppingCar, setShoppingCar}) => (

    <div className="car">
        <h2>Shopping Car</h2>

        {
            shoppingCar.length === 0 ?
                <b>Empty</b>
            :
                shoppingCar.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        shoppingCar={shoppingCar}
                        setShoppingCar={setShoppingCar}
                        car={true}/>
                ))
        }
    </div>
);
 
export default ShoppingCar;