import React, { useEffect, useState } from 'react';
/* import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb'; */ 
import Service from '../Service/Service';
 
import './Home.css';


/* Home Component */
const Home = () => {
    const [ services, setServices] = useState([]);
    /* const [cart,setCart] = useCart(); */
    useEffect(()=>{
      fetch('https://afternoon-wave-38333.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
    },[])


        // add to my orders
    /* const handleAddToCart = (product) => {
      const exists = cart.find(pd => pd.key === product.key )
      let newCart = [];
      if(exists){
          const rest = cart.filter(pd => pd.key !== product.key);
          exists.quantity = exists.quantity + 1;
          newCart = [...rest,  exists];

      }
      else{
          product.quantity = 1;
          newCart = [...cart, product];
      }
       
       console.log(newCart);
       setCart(newCart);
        
       addToDb(product.key);
  }  */
    return (
        <div >
         
            
         <div className="service-container p-5">
         {
               services.map( service => <Service
                service ={service}
                key ={service.name}
                /* handleAddToCart={handleAddToCart} */
               >

               </Service>)
             }

         </div>
        </div>
    );
};

export default Home;