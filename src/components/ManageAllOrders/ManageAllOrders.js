import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
  

    useEffect(() => {
        fetch('https://polar-lowlands-07923.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
     },[]);
     
     const handleDelete = _id => {
        const url =  `https://polar-lowlands-07923.herokuapp.com/orders/${_id}`
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
        <h2>Manage All Orders : {orders.length}</h2>
        <Table  responsive striped bordered hover>
<thead>
<tr>
   
  <th>Name</th>
  <th>Email Address</th>
  <th>Product Id</th>
  <th>Deleting Order</th>
   

</tr>
</thead>
<tbody>
  {orders.map((order)=> (  
    
  <tr key={order._id}>
  
  <td>{order.name}</td>
  <td>{order.email}</td>
  <td>{order._id}</td>
 
  <td><Button  onClick={ () => handleDelete(order._id)} className="bg-danger">Delete</Button></td>
</tr>))}



 
</tbody>
</Table>
    </div>
    );
};

export default ManageAllOrders;