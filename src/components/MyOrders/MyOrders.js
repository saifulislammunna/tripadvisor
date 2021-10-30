 
 import React, { useEffect, useState } from 'react';
 
 
 const MyOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-wave-38333.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
     },[]);

     const handleDelete = id => {
        const url =  `https://afternoon-wave-38333.herokuapp.com/services${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Are you sure')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);

            }
           
        })
    };
     

     return (
         <div>
             <h1>  My orders</h1>
           
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button className="btn-danger rounded" onClick={() => handleDelete(service._id)} >Delete</button>

                </div>)
            }
         </div>
     );
 };
 
 export default MyOrders;