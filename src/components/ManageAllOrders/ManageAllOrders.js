import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
     },[])
    return (
        <div>
            <h1>This is manage order</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button  >Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;