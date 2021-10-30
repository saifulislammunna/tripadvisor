/* import React from 'react';
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

export default MyOrders; */
 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
    /*  const { serviceId } = useParams(); 
     const [service, setService] = useState({})  

     useEffect( () => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])  */
    return (
        <div> 
             <h2>Details of : </h2> 
             <h2>this is booking: {/* {serviceId} */}</h2>
        </div>
    );
}; 

 export default MyOrders; 