import React, { useEffect, useRef } from 'react';
import { Button/* , Carousel */ } from 'react-bootstrap';
import './Banner.css';
import { init } from 'ityped';

const Banner = () => {
  
    /* animation added */
    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 70,
             strings: ['  Beatiful World .']
        })
    })
    return (
      <div>
            
             
      <div className="banner">
       <div className="background-image">
       <div className="left-container  half-width ">
              <div className="text-container">
                  <h1 className="fs-1 fw-bold text-black " >A journey of a thousand miles, <br />
                  begins with a single step.</h1>
                  <h3 className="text-animation fs-1 text-black"> <span  ref={textRef}></span></h3>

                    <Button className="btn">Explore</Button> 
              </div>
         </div>
   
      </div>
 </div>
 </div>
    );
};

export default Banner;

{/* <div>
<div className="carousel-part">
 
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
</div> */}