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
      <h3 className="fw-bolder" >learn bengali</h3>
      <p className="fw-bolder">LEARNING BENGALI: FROM BANGLA BEGINNER TO ADVANCED LEARNER</p>
      <Button className="btn btn-primary">Learn bengali</Button>
    </Carousel.Caption>
  </Carousel.Item>
                <Carousel.Item>
                   <img
                 className="d-block w-100"
                 src="https://i.ibb.co/rpr8hYn/Eiffel-tower-and-Paris-city.jpg"
                 alt="Second slide" width="500" height="400" 
                 />
                 <Carousel.Caption>
                  <h3 className="text-dark">learn arabic</h3>
                   <p className="text-dark fw-bolder">This Arabic course contains 100+ Arabic lessons that cover most Arabic grammar and Arabic morphology topics needed to help you learn Arabic quickly.</p>
                   <Button  className="btn btn-primary" >Learn Arabic</Button>
                 </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                <img
                 className="d-block w-100"
                src="https://i.ibb.co/dQqNtns/The-Great-Wall-of-Jinshan-Mountains-in-the-Cloud-Sea.jpg"
                  alt="Third slide" width="500" height="400"  
                  />

    <Carousel.Caption>
      <h3 className="fw-bolder">best english courses</h3>
      <p className="fw-bolder">improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
      <Button  className="btn btn-primary" >Learn  English</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/HtZx6PQ/View-of-Colosseum-in-Rome-and-morning-sun-Italy-Europe.jpg"
      alt="Fourth slide" width="500" height="400" 
    />

    <Carousel.Caption>
      <h3 className="text-dark fw-bolder">learn Chinese</h3>
      <p className="text-dark fw-bolder">LEARNING Chinese: FROM Chinese BEGINNER TO ADVANCED LEARNER</p>
      <Button  className="btn btn-primary" >Learn Chinese  </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

             </div>
        </div>
    );
};

export default Banner;