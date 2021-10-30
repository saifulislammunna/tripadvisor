import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AllHotel from '../AllHotel/AllHotel';
import AllNextTrip from '../AllNextTrip/AllNextTrip';
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
    const { isLoading} = useAuth();
    /* console.log(user); */
    
    if(isLoading){
        return <Spinner animation="border" variant="danger"/>
    }

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
         <h1 className="text-start p-3">Destinations Travel lovers</h1>
            
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
        <div>
        <div className="p-5">
             
             <AllHotel></AllHotel>

         </div>
        </div>
        <div>
            <h2 className="text-start ps-3">Dream Your Next Trip</h2>
        <h4 className="text-start ps-3"> Weekend getaways</h4>
        <div className="p-5">
             
             <AllNextTrip></AllNextTrip>

         </div>
        </div>
        </div>
    );
};

export default Home;