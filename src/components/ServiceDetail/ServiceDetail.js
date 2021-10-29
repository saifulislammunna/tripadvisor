import React, { useEffect, useState } from 'react';
import { Button  } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAuth from '../../hooks/useAuth';
import './ServiceDetail.css';
import Shipping from '../Shipping/Shipping';
/* import { clearTheCart, getStoredCart } from '../../utilities/fakedb'; */


const ServiceDetail = () => {
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
    /* const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://afternoon-wave-38333.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.insertedId){
                    alert('Order proccessed successfully')
                    clearTheCart(); */
                    /* reset(); */
         /*    }
        })

        console.log(data)
    }; */
    return (
        <div className="service-detail">
            <Shipping></Shipping>
             {/* <div>
             <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
       
      <input defaultValue={user.displayName} {...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {errors.email && <span className="error">This field is required</span>} 
      <input placeholder="Address" defaultValue=" " {...register("address")} />
      <input placeholder="city" defaultValue=" " {...register("city")} />
      <input placeholder="phone number" defaultValue=" " {...register("phone")} />
      <input type="submit" />
    </form>
        </div> */}
           <div className="service-img p-3">
            <img src={service.img}  alt="" />
            </div>
           
           <div className="d-flex p-3 selected-item align-items-center justify-content-center">
                      <div className=" selected-item  d-flex  align-items-center      justify-content-center p-5">
         
             
                       <h1 className="pb-2 ">{ service.name} </h1>
                           <p className="p-2 ">{service.description}</p>
             
                       </div >
            
                       <Link to="/home"  ><Button  className="btn  rounded-pill btn">
                  
                 <span className="p-2 "> Book Now</span></Button></Link>
           </div>
            
           
         </div>
     
        
    );
};

export default ServiceDetail;
 