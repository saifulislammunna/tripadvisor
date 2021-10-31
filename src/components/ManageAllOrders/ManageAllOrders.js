import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
 
const ManageAllOrders = () => {
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
             
             <div>
             {
                orders.map(order => <div key={order._id} className="d-flex justify-content-center align-items-center">
                    <h3 className="p-2">UserName:{order.name}</h3>
                     <p className="p-3">Order Id:{order._id}</p> 
                     <p>Status : Pending.. <button className="btn-primary rounded">Update</button>  <Button onClick={() => handleDelete(order._id)} className="btn-danger">Delete User</Button></p>
                    
                    
                </div>)
            }
             </div>
        </div>
    );
};

export default ManageAllOrders;