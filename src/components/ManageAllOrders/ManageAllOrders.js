import React, { useEffect, useState } from 'react';
 
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
  

    useEffect(() => {
        fetch('https://afternoon-wave-38333.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
     },[]);
     
    return (
        <div>
             
             <div>
             {
                orders.map(order => <div key={order._id} className="d-flex justify-content-center align-items-center">
                    <h3 className="p-2">UserName:{order.name}</h3>
                     <p className="p-3">Order Id:{order._id}</p> 
                     <p>Status : Pending.. <button className="btn-primary rounded">Update</button></p>
                    
                </div>)
            }
             </div>
        </div>
    );
};

export default ManageAllOrders;