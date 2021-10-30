import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    const {user } = useAuth();
     
    return (
        <div>
            <h1>This is manage all orders</h1>
             <div>
               {
                   user.email? <h1>All Users</h1> : ''
               }
          
          < p  className="text-dark  ">
       
           {user.displayName}  
             {user.email}
          </p>
         
             </div>
        </div>
    );
};

export default ManageAllOrders;