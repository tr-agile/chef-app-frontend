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
          <h4>Select cuisine, budget and date</h4>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carousel2} alt='logo' className='carousel2' height="550px" />
        <Carousel.Caption>
          <h4>Find your perfect menu</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={carousel3} alt='logo' className='carousel3' height="550px" />
        <Carousel.Caption>
          <h4>Let us know who many guests to cater for</h4>
          
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
       <img src={carousel4} alt='logo' className='carousel4' height="550px" />
     <Carousel.Caption>
       <h4>Confirm booking</h4>
       
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
   <img src={carousel5} alt='logo' className='carousel5' height="550px"/>
        <Carousel.Caption>
          <h4>Sit back, relax, we'll take it from here</h4>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    
    );
  } 
}

export default Steps;