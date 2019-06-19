import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
     <div className="conatiner w-100" id="topContainer">

       <div className ="row"> 
       <div className= "col-12">
        <Navbar bg="light" sticky="top">
            <Navbar.Brand href="#home">Chef Prive</Navbar.Brand>
        </Navbar>
        </div>
      </div>

       
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
        <Carousel className="mb-3 mt-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/450x225"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/450x225"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/450x225"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        </div>
      </div>


      


      <form className="mb-3">
        <div className="row w-100">
          <div className="col-2"></div>
          <div className="col-3">
            <input type="text" class="form-control" placeholder="Location"/>
          </div>
          <div class="col-3">
            <input type="date" class="form-control" placeholder="Date"/>
          </div>
          <div className="col-2">
            <Button variant="primary" type="submit" className="btn-block mb-3" >
              Search
            </Button>
          </div>
        </div>
        <br/>
        <br/>
        </form>
        <br/>


        <form>
        <div className="row w-100">

          <div className="col-2"></div>

          <div className="col-2">          
          <div className="card">
            <div className="card bg-dark text-white">
              <img src="https://via.placeholder.com/150" className="card-img" alt="..."/>
              <div className="card-img-overlay">
              <h5 className="card-title">Type 1</h5>                  
              </div>
            </div>            
          </div>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox"/>
          </Form.Group>                    
        </div>

        <div className="col-1"></div>

        <div className="col-2">          
          <div className="card">
            <div className="card bg-dark text-white">
              <img src="https://via.placeholder.com/150" className="card-img" alt="..."/>
              <div className="card-img-overlay">
              <h5 className="card-title">Type 2</h5>                  
              </div>
            </div>            
          </div>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox"/>
          </Form.Group>                    
        </div>

        <div className="col-1"></div>

        <div className="col-2">          
          <div className="card">
            <div className="card bg-dark text-white">
              <img src="https://via.placeholder.com/150" className="card-img" alt="..."/>
              <div className="card-img-overlay">
              <h5 className="card-title">Type 3</h5>                  
              </div>
            </div>            
          </div>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox"/>
          </Form.Group>                    
        </div>

        </div>
      </form>
      <br />
      
      
     </div>


    </div>
  );
}

export default App;
