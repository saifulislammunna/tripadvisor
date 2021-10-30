import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
 
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons'; */
import './NextTrip.css';
 


/* Hotel component */
const NextTrip = (props) => {
    const { url,title } = props.nextTrip;
     
     
    return (
       
        <div>
          
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" /* ref={imgRef} */ src={url} className="  p-5"  width="400" height="300" />
    <Card.Body>
      <Card.Title className="fs-2"  >   {title}</Card.Title>
       
     {/*  < p className="text-start" > {description}</p> */}
      <div>

        <Button  > {/* <FontAwesomeIcon icon={faInfo } />  */}Book Now</Button> 
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting Nexttrip component */
export default NextTrip;