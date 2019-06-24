import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Menu extends Component {

    state = {
      bookNow: false,
      confirm: false,
      firstName: "",
      lastName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      postcode: "",
      contactNumber: "",
      numberOfGuests: "Number of Guests", 

      
    }

    handleBookNowClick = () => { 
      this.setState({
        bookNow: true
      })
    }

    handleConfirmClick = () => { 
      this.setState({
        confirm: true
      })
    }

    handleFirstNameChange = (event) => {
      this.setState({
        firstName: event.target.value
  
      })
    }

    handleLastNameChange = (event) => {
      this.setState({
        lastName: event.target.value
  
      })
    }

    handleEmailChange = (event) => {
      this.setState({
        email: event.target.value
  
      })
    }

    handleAddress1Change = (event) => {
      this.setState({
        address1: event.target.value
  
      })
    }

    handleAddress2Change = (event) => {
      this.setState({
        address2: event.target.value
  
      })
    }

    handleCityChange = (event) => {
      this.setState({
        city: event.target.value
  
      })
    }

    handlePostcodeChange = (event) => {
      this.setState({
        postcode: event.target.value
  
      })
    }

    handleContactNumberChange = (event) => {
      this.setState({
        contactNumber: event.target.value
  
      })
    }

    handleNumberOfGuestsChange = (event) => {
      this.setState({
        numberOfGuests: event.target.value
  
      })
    }

    handleClick = () => {

      const newBooking = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        postcode: this.state.postcode,
        contactNumber: this.state.contactNumber,
        numberOfGuests: this.state.numberOfGuests, 
      };
      
      if (newBooking.firstName.length > 0 && newBooking.lastName.length > 0 && newBooking.email.length > 0 && newBooking.address1.length > 0 && newBooking.address2.length > 0 && newBooking.city.length > 0 && newBooking.postcode.length > 0 && newBooking.contactNumber.length > 0 && newBooking.numberOfGuests !== "Number of Guests")
      { 
      
      this.props.addBooking(newBooking);
      this.setState({
        text: ''
      });
    
  }      }
    


  render() {
    return (
        
        <Card className="bg-light text-light m-4">
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
                  <Accordion.Toggle as={Button} variant="light" eventKey="1"className="d-flex align-items-end flex-column text-dark">
                    View Menu
                  </Accordion.Toggle>
                </Card.Header>
                
                <Accordion.Collapse eventKey="1">
                              
                  
                  { this.state.bookNow ? this.state.confirm ?

                  

                    <Card className="text-dark">                  
                    <Card.Body>Congratulations Booking Confirmed! We Look Forward to Seeing You!</Card.Body>

                    <Card.Footer>
                      <Form.Group controlId="exampleForm.ControlSelect1">                         
                          
                      </Form.Group>
                    </Card.Footer>                 
                  </Card>

                  :
                  <Card className="text-dark">                  
                    <Card.Body>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Control placeholder="First name" id="firstName" />
                          </Col>
                          <Col>
                            <Form.Control placeholder="Last name" id="lastName" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group >
                              <Form.Label></Form.Label>                              
                              <Form.Control type="email" placeholder="Email Address" id="email" />
                            </Form.Group>
                          </Col>
                        </Row>     
                        <Row>
                          <Col>
                            <Form.Group >                              
                              <Form.Control type="email" placeholder="Address 1" id="address1" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group >                              
                              <Form.Control type="email" placeholder="Address 2" id="address2"/>
                            </Form.Group>
                          </Col>
                        </Row>   
                        <Row>
                          <Col>
                            <Form.Control placeholder="City" id="city"/>
                          </Col>
                          <Col>
                            <Form.Control placeholder="Postcode" id="postcode" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group >
                              <Form.Label></Form.Label>                              
                              <Form.Control type="email" placeholder="Contact Number" id="contactNumber" />
                            </Form.Group>
                          </Col>
                        </Row>                          
                          <Form.Control as="select" className="mb-2" id="numberOfGuests">
                            <option>Number of Guests</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>                                
                      </Form>
                    </Card.Body>
                    <Card.Footer>
                      <Form.Group controlId="exampleForm.ControlSelect1">                        
                          <Button id="confirm" variant="secondary" type="submit" className="btn-block mt-3" onClick={this.handleConfirmClick}>
                            Confirm
                          </Button>
                      </Form.Group>
                    </Card.Footer>                 
                  </Card> 
                  
                  : 
                  
                  <Card className="text-dark">                  
                    <Card.Body>{this.props.Menu.menuMeals}</Card.Body>

                    <Card.Footer>
                      <Form.Group controlId="exampleForm.ControlSelect1">                         
                          <Button id="bookNow" variant="secondary" type="submit" className="btn-block mt-3" onClick={this.handleBookNowClick} >
                            Book Now
                          </Button>
                      </Form.Group>
                    </Card.Footer>                 
                  </Card>}

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