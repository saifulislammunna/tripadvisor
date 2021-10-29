import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
 
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const MyOrders = () => {
     
    const [cart, setCart] = useCart( );
     
    const handleRemove = key => {
         const newCart = cart.filter(product => product.key !== key);
         setCart(newCart);
         removeFromDb(key)
    }
    
    return (
        <div className="shop-container">
             <div className="product-container">
                 {
                     cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove = {handleRemove} ></ReviewItem>)
                 }

             </div>
              
        </div>
    );
};

export default MyOrders;