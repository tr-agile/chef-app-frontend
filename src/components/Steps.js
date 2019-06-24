import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Steps extends Component {
  render() {
    return (
      <Carousel className="mb-3 mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/450x225"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Select cusine, budget and date</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/450x225"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Find your perfect menu</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/450x225"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Let us know who many guests to cater for</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
     <img
       className="d-block w-100"
       src="https://via.placeholder.com/450x225"
       alt="First slide"
     />
     <Carousel.Caption>
       <h1>Confirm booking</h1>
       
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/450x225"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Sit back, relax, we'll take it from here</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    
    );
  } 
}

export default Steps;