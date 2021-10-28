import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './Service.css'


/* service component */
const Service = (props) => {
    const {img,name,description } = props.service;
     
    return (
       
        <div>
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title className="fs-2">   {name}</Card.Title>
       
      < p className="text-start"> {description}</p>
      <div>
       <Button> <FontAwesomeIcon icon={faInfo } /> Detail</Button>  
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