import React from 'react';
import useAuth from '../../hooks/useAuth';

const ManageAllOrders = () => {
    /* const {user } = useAuth();
     */
     
    return (
        <div>
             
             <div>
              {/*  {
                   user.email? <h1>All Users</h1> : ''
               } */}
          
          < p  className="text-dark  ">
       
        {/*    {user.displayName}   */}
            <h1>This is manage order</h1>
          </p>
          <p> {/* {user.email} */}</p>
         
             </div>
        </div>
    );
};

export default ManageAllOrders;