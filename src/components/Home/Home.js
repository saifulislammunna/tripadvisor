import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css';


/* Home Component */
const Home = () => {
    const [ services, setServices] = useState([]);
     
    useEffect(()=>{
      fetch('https://afternoon-wave-38333.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
    },[])
    return (
        <div >
            
         <div className="service-container p-5">
         {
               services.map( service => <Service
                service ={service}
                key ={service.name}
              
               >

               </Service>)
             }

         </div>
        </div>
    );
};

export default Home;