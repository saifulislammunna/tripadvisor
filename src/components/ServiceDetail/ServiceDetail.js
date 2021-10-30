import React, { useEffect, useState } from 'react';
import { Button  } from 'react-bootstrap';
import { useParams } from 'react-router';
 
 

 
import './ServiceDetail.css';
import Shipping from '../Shipping/Shipping';
/* import { clearTheCart, getStoredCart } from '../../utilities/fakedb'; */


const ServiceDetail = ( ) => {
    
    const {_id} = useParams();
    const [service,setService] = useState( []);
    /* const { register, handleSubmit,reset,   formState: { errors } } = useForm(); */

   /*  const {user} = useAuth(); */
    // console.log(params);
    useEffect(()=>{
    
        fetch('https://afternoon-wave-38333.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const selected = data.find ( s => s._id == _id)
               console.log(selected) 
               
               setService(selected);
        });
    },[]);
     
    return (
        <div className="service-detail">
            <Shipping></Shipping>
            
           <div className="service-img p-3">
            <img src={service.img}  alt="" />
            </div>
           
           <div className="d-flex p-3 selected-item align-items-center justify-content-center">
                      <div className=" selected-item  d-flex  align-items-center      justify-content-center p-5">
         
             
                       <h1 className="pb-2 ">{ service.name} </h1>
                           <p className="p-2 ">{service.description}</p>
             
                       </div >
            
                        <Button   className="btn  rounded-pill btn">
                  
                 <span className="p-2 "> Place Order</span></Button> 
           </div>
            
           
         </div>
     
        
    );
};

export default ServiceDetail;
 