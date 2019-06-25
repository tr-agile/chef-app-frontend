import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Steps extends Component {
  render() {
    return (
      <Carousel className="mb-3 mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1556909114-a1d34f47412c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="First slide"
          height="550px"

        />
        <Carousel.Caption>
          <h1>Select cuisine, budget and date</h1>
         
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