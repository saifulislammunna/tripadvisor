import React, { useEffect, useState } from 'react';
 import NextTrip from '../NextTrip/NextTrip';

const AllNextTrip = () => {
    const [ nextTrips, setNextTrips] = useState([]);
    /* const [cart,setCart] = useCart(); */
    useEffect(()=>{
      fetch('https://afternoon-wave-38333.herokuapp.com/nextTrip')
      .then(res => res.json())
      .then(data => setNextTrips(data));
    },[])
    return (
        <div>
             
                
            <div className="service-container p-5">
            {
                  nextTrips.map( nextTrip => <NextTrip
                    nextTrip ={nextTrip}
                   key ={nextTrip.title}
                  
                  >
   
                  </NextTrip>)
                }
   
            </div>
        </div>
    );
};

export default AllNextTrip;