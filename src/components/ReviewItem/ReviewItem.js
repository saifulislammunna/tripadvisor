import React from 'react';
import { Card,Button , CardGroup } from 'react-bootstrap';

const ReviewItem = (props) => {
    const {img,name,description,_id} = props.service;
    const {handleRemove} = props;
    return (
        <div className="single-service">
        {/* card group added */}
      <CardGroup>
<Card className=" ">
<Card.Img variant="top" /* ref={imgRef} */ src={img} className="  p-5"  width="400" height="300" />
<Card.Body>
<Card.Title className="fs-2"  >   {name}</Card.Title>
 
< p className="text-start" > {description}</p>
<div>

  <Button onClick = {() => handleRemove(_id)}  > {/* <FontAwesomeIcon icon={faInfo } />  */}Remove</Button> 
</div>
</Card.Body>





</Card>
</CardGroup>
</div>
    );
};

export default ReviewItem;