import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';

const AllHotel = () => {
    const [ hotels, setHotels] = useState([]);
    /* const [cart,setCart] = useCart(); */
    useEffect(()=>{
      fetch('https://afternoon-wave-38333.herokuapp.com/hotels')
      .then(res => res.json())
      .then(data => setHotels(data));
    },[])
    return (
        <div>
            <h1 className="text-start p-3">Cool Plus stays</h1>
                <p className="text-start">Where Tripadvisor Plus members are staying and saving</p>
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