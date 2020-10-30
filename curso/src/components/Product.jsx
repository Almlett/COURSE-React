import React from 'react'

const Product = ({product, shoppingCar, setShoppingCar, car}) => {
    
    const {id, name, cost} = product;

    const selectProduct = () => {
        setShoppingCar([
            ...shoppingCar,
            product
        ])
    }

    const deleteProduct = () => {
        const products = shoppingCar.filter(product => product.id !== id)
        setShoppingCar(products)
    }

    return ( 
        <div>
            <h2>{name} - {cost}</h2>
            {
                car
                ?   (
                        <button 
                            type="button"
                            onClick={() => deleteProduct()}
                            >Delete</button>
                    )
                :   (
                        <button 
                            type="button"
                            onClick={() => selectProduct()}
                            >Buy</button>
                    )
            }
            
        </div>
     );
}
 
export default Product;