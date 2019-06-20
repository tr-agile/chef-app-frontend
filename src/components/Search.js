import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


class Search extends Component {
  render() {
    return (
     
     <form className="mb-3">
        <div className="row w-100">
          <div className="col-2"></div>
          <div className="col-3">
          <div className="form-group">            
            <select className="form-control" id="exampleFormControlSelect1" >
              <option>Cusine</option>
              <option>French</option>
              <option>English</option>
              <option>Spanish</option>
              <option>Italian</option>
            </select>
          </div>
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
    );
  } 
}

export default Search;