import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
 
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons'; */
import './Service.css'
import { Link } from 'react-router-dom';


/* service component */
const Service = (props) => {
    const {img,name,description,_id } = props.service;
    const url = `/services/${_id}`;
     
    return (
       
        <div>
          
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" /* ref={imgRef} */ src={img}   width="400" height="300" />
    <Card.Body>
      <Card.Title className="fs-2"  >   {name}</Card.Title>
       
      < p className="text-start" > {description}</p>
      <div>

       <Link  className="link" to={url}><Button  > {/* <FontAwesomeIcon icon={faInfo } />  */}Book Now</Button></Link>
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting service component */
export default Service;