import React  from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
 
 

 import './Login.css';

 /* login component */

const Login = ( ) => {
   
 const { singnInUsingGoogle} = useAuth(); 
 const location = useLocation();
 const history = useHistory();
 const redirect_uri = location.state?.from || `/home`;
/*  console.log('came from',location.state?.from); */
 const handleGoogleLogin = () => {
    
     singnInUsingGoogle()
     .then(result => {
            history.push(redirect_uri);
     })
    

 }
  
    return (
        <div className="mx-5">
            <div className="p-3">   
                <div  className="d-flex justify-content-center align-items-center   ">
                  <h5 className="fs-5">  Log in With</h5>
                  </div>
               <div  className=" d-flex justify-content-center align-items-center toggle-btn">

               <Button   onClick = {handleGoogleLogin}
                 className="btn"
                 >Google Log in</Button >
                 </div>  

              </div>
            
        </div>
    );
};

export default Login;