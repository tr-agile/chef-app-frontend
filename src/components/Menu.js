import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';


class Menu extends Component {

    

  render() {
    return (
        <Card className="bg-light text-dark m-4">
        <Card.Img src={this.props.Menu.menuImageFPath} alt="Card image" />
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
                    <Card.Body>{this.props.Menu.menuMeals}</Card.Body>
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
    );
  } 
}

export default Menu;