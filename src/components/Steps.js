import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './Images/carousel1.jpg';
import carousel2 from './Images/carousel2.jpg';
import carousel3 from './Images/carousel3.jpg';
import carousel4 from './Images/carousel4.jpg';
import carousel5 from './Images/carousel5.jpg';


class Steps extends Component {
  render() {
    return (
      <Carousel className="mb-3 mt-3">
      <Carousel.Item>
      <img src={carousel1} alt='logo' className='carousel1' height="550px" />
        <Carousel.Caption>
          <h2>Select your chosen date, cuisine and your budget.</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carousel2} alt='logo' className='carousel2' height="550px" />
        <Carousel.Caption>
          <h2>Find the perfect menu for you and your guests.</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carousel3} alt='logo' className='carousel3' height="550px" />
        <Carousel.Caption>
          <h2>Let us know how many guests we'll be catering for. </h2>
          
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
       <img src={carousel4} alt='logo' className='carousel4' height="550px" />
     <Carousel.Caption>
       <h2>Once you're happy, confirm your booking with us.</h2>
       
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <img src={carousel5} alt='logo' className='carousel5' height="550px"/>
        <Carousel.Caption>
          <h2>Sit back, relax and we'll take it from here.</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    
    );
  } 
}

export default Steps;