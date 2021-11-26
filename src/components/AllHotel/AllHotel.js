import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const AllHotel = () => {
    const [ hotels, setHotels] = useState([]);
    /* const [cart,setCart] = useCart(); */
    useEffect(()=>{
      fetch('https://polar-lowlands-07923.herokuapp.com/hotels')
      .then(res => res.json())
      .then(data => setHotels(data));
    },[])
    return (
        <div>
            
            <div className="service-container p-5">
            {
                  hotels.map( hotel => <Hotel
                   hotel ={hotel}
                   key ={hotel.title}
                  
                  >
   
                  </Hotel>)
                }
   
            </div>
        </div>
    );
};

export default AllHotel;