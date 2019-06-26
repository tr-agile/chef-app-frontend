import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


class Search extends Component {



  handleCusineChange = (event) => {
    this.setState({
      Cusine: event.target.value
  
    })
  }
  
  handleBudgetChange = (event) => {
    this.setState({
      Budget: event.target.value
  
    })
  }
  
  handleDateChange = (event) => {
    this.setState({
      Date: event.target.value
  
    })
  }



  searchClicked = () => { 
    const searchDate = this.state.Date;
    this.props.searchClicked(searchDate);
  }


  render() {
    return (
     
     <form className="mb-3 d-flex justify-content-center">
        <div className="row w-100 ">
          
          <div className="col-3">
          <div className="form-group">            
            <select className="form-control" id="Cusine" onChange={this.handleCusineChange}>
              <option>Cusine</option>
              <option>All</option>
              <option>French</option>
              <option>English</option>
              <option>Spanish</option>
              <option>Italian</option>
            </select>
          </div>
          </div>
          <div className="col-3">
          <div className="form-group">            
            <select className="form-control" id="Budget" onChange={this.handleBudgetChange} >
              <option>Budget</option>
              <option>All</option>
              <option>Simple - £45 pp</option>
              <option>Premier - £65 pp</option>
              <option>Michelin - £95 pp</option>
             
            </select>
          </div>
          </div>
          <div className="col-3">
            <input type="Date" className="form-control" placeholder="Date" onChange={this.handleDateChange}/>
          </div>
          <div className="col-3">
            <Button onClick={this.searchClicked} variant="secondary" type="button"   className="btn-block mb-3" >
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