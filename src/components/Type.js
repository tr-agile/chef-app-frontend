import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

class Type extends Component {
  render() {
    return (
        <form>
        <div className="row w-100">

          <div className="col-2"></div>

          <div className="col-2">          
          <div className="card">
            <div className="card bg-light text-white">
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
            <div className="card bg-light text-white">
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
            <div className="card bg-light text-white">
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
    );
  } 
}

export default Type;