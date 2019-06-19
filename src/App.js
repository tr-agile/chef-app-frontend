import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  return (
    <div className="App">
     <div className="conatiner " id="topContainer">

       <div className ="row"> 
       <div className= "col-12">
        <Navbar bg="light" >
            <Navbar.Brand>Chef Prive</Navbar.Brand>
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


      Input forms


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
            <Button variant="secondary" type="submit" className="btn-block mb-3" >
              Search
            </Button>
          </div>
        </div>
        <br/>
        <br/>
        </form>
        <br/>

        Type Filter

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

    Menu List

      <div className="row-100 d-flex justify-content-center"> 
             
      <div className="col-5">
        
        <Card className="bg-light text-white m-4">
          <Card.Img src="https://via.placeholder.com/150x74" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>              
            </Card.ImgOverlay>
  
          <div className="row">
            <div className="col-12">
              <Accordion> 
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="1"className="d-flex align-items-end flex-column">
                      View Menu
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card>                  
                      <Card.Body>Hello! I'm another body</Card.Body>
                      <Card.Footer>
                        <Form.Group controlId="exampleForm.ControlSelect1">                        
                          <Form.Label className="text-dark">Number of Guests</Form.Label>    
                            <Form.Control as="select" className="mb-2">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Form.Control>
                            <Button variant="secondary" type="submit" className="btn-block mb-3" >
                              Book Now
                            </Button>
                        </Form.Group>
                      </Card.Footer>                 
                    </Card>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>          
        </Card>  
      </div>
        
    <div className="col-5">
        
        <Card className="bg-light text-white m-4">
          <Card.Img src="https://via.placeholder.com/150x74" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>              
            </Card.ImgOverlay>
  
          <div className="row">
            <div className="col-12">
              <Accordion> 
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="light" eventKey="1"className="d-flex align-items-end flex-column">
                      View Menu
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card>                  
                      <Card.Body>Hello! I'm another body</Card.Body>
                      <Card.Footer>
                        <Form.Group controlId="exampleForm.ControlSelect1">                        
                          <Form.Label className="text-dark">Number of Guests</Form.Label>    
                            <Form.Control as="select" className="mb-2">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Form.Control>
                            <Button variant="secondary" type="submit" className="btn-block mb-3" >
                              Book Now
                            </Button>
                        </Form.Group>
                      </Card.Footer>                 
                    </Card>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>          
        </Card>  
      </div>

      </div>
      
      
     </div>


    </div>
  );
}

export default App;
