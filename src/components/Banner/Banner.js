import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
              <div className="carousel-part">
               {/* carousel added */}
             <Carousel fade>
             <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/grCB4Wj/longest-sea-beach-in.jpg"
      alt="First slide" width="500" height="400"  
    />

    <Carousel.Caption>
      <h3 className="fw-bolder" >longest sea beach,Cox's Bazar</h3>
       
      <Button className="btn btn-primary">Get bengaladesh</Button>
    </Carousel.Caption>
  </Carousel.Item>
                <Carousel.Item>
                   <img
                 className="d-block w-100"
                 src="https://i.ibb.co/rpr8hYn/Eiffel-tower-and-Paris-city.jpg"
                 alt="Second slide" width="500" height="400" 
                 />
                 <Carousel.Caption>
                  <h3 className="">Eiffel tower and Paris city</h3>
                   
                   <Button  className="btn btn-primary" >Get France</Button>
                 </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                <img
                 className="d-block w-100"
                src="https://i.ibb.co/dQqNtns/The-Great-Wall-of-Jinshan-Mountains-in-the-Cloud-Sea.jpg"
                  alt="Third slide" width="500" height="400"  
                  />

    <Carousel.Caption>
      <h3 className="fw-bolder">The Great Wall of Jinshan Mountains in the Cloud-Sea</h3>
    
      <Button  className="btn btn-primary" >Get China</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/HtZx6PQ/View-of-Colosseum-in-Rome-and-morning-sun-Italy-Europe.jpg"
      alt="Fourth slide" width="500" height="400" 
    />

    <Carousel.Caption>
      <h3 className="  fw-bolder">View of Colosseum in Rome and morning sun Italy Europe</h3>
       
      <Button  className="btn btn-primary" >Get  Italy  </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

             </div>
        </div>
    );
};

export default Banner;