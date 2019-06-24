import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class Steps extends Component {
  render() {
    return (
      <Carousel className="mb-3 mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
          height='600px'
          width="450px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
          height='600px'
          width="450px"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1756064/pexels-photo-1756064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="First slide"
          height='600px'
          width="450px"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  } 
}

export default Steps;