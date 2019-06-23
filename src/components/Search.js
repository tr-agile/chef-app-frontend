import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


class Search extends Component {

  state = {
    Cusine: '',
    Budget: '',
    Date: '',
    }

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

    handleClick = () => {

      const searchMenus = {
        Cusine: this.state.Cusine,
        Budget: this.state.Budget,
        Date: this.state.Date,
        
      };
      
      if (searchMenus.Cusine !== "Cusine" && searchMenus.Budget !== "Budget" && searchMenus.Date !== ""){ 
      
        this.props.searchMenus(searchMenus);
        this.setState({
          text: ''
        });
      
    }}






  render() {
    return (
     
     <form className="mb-3 d-flex justify-content-center">
        <div className="row w-100 ">
          
          <div className="col-3">
          <div className="form-group">            
            <select className="form-control" id="Cusine" >
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
            <select className="form-control" id="Budget" >
              <option>Budget</option>
              <option>All</option>
              <option>Simple - £45 pp</option>
              <option>Premier - £65 pp</option>
              <option>Michelin - £95 pp</option>
             
            </select>
          </div>
          </div>
          <div class="col-3">
            <input type="Date" class="form-control" placeholder="Date"/>
          </div>
          <div className="col-3">
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