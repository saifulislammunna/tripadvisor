 
 import React, { useEffect, useState } from 'react';
 
 
 
 const MyOrders = () => {
    const [orders, setOrders] = useState([]);
  

    useEffect(() => {
        fetch('https://afternoon-wave-38333.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
     },[]);
 
     const handleDelete = _id => {
        const url =  `https://afternoon-wave-38333.herokuapp.com/orders/${_id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
           if(data.deletedCount){
                alert('Are you sure')
                const remaining = orders.filter(service => service._id !== _id);
                setOrders(remaining);
 
          } 
         
        })
    };
       

     return (
         <div>
             <h1>  My orders</h1>
           
            {
                orders.map(order => <div key={order._id}>
                    <h3>Name:{order.name}</h3>
                    <div><p>Order Id:{order._id}</p></div>
                     <button className="btn-danger rounded" onClick={() => handleDelete(order._id)} >Delete</button> 
                     
                </div>)
            }
         </div>
     );
 };
 
 export default MyOrders;