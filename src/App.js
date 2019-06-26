import React, { Component } from 'react';
import './App.css';
import Steps from './components/Steps';
import Search from './components/Search';
import Header from './components/Header';
import Menu from './components/Menu';
import axios from 'axios'



class App extends Component  {

 state = {

  Menu: [

    ],

  ChefTable: [

      {chefId: 1, chefName: "John Peters", chefContact: "07712345678", chefLocation: "London"},

      {chefId: 2, chefName: "Peter Jones", chefContact: "07722222222", chefLocation: "Manchester"},

      {chefId: 3, chefName: "Tim Smith", chefContact: "07733332222", chefLocation: "Leeds"},

      {chefId: 4, chefName: "Sean Seams", chefContact: "07756567879", chefLocation: "London"},

      {chefId: 5, chefName: "Richard Sent", chefContact: "07712341234", chefLocation: "Manchester"}

  ],

  Booking: [
    {firstname:"laurie", lastname:"lang"}
  ],

// within state I have set the state of the search function as harriet suggested   
    Cusine: '',
    Budget: '',
    Date: '',
    


}
// here is the code that changes the state in the event of the variables being changed within the search function. Harriet mentioned that once we have created a function that tracks the change in state we can hook this up to the back end queries with axios. this is as far as I have got with this and I need some support completeing this 

// handleCusineChange = (event) => {
//   this.setState({
//     Cusine: event.target.value

//   })
// }

// handleBudgetChange = (event) => {
//   this.setState({
//     Budget: event.target.value

//   })
// }

// handleDateChange = (event) => {
//   this.setState({
//     Date: event.target.value

//   })
// }


// this is the beginging of the function that will push new bookings to the booking table. this needs sanity checking as theres an issue when i try to confirm booking
addBooking = (newBooking) => {

  alert(JSON.stringify(newBooking));
 
  const newBookings = this.state.Booking.slice();
  newBookings.push(newBooking);

    this.setState({
    Booking: newBookings
  });
}



searchClicked = (bookingDate) => { 

 

  axios.get(`https://onkd21v7ba.execute-api.eu-west-2.amazonaws.com/dev/dining/${bookingDate}`)
  .then(response => {
    this.setState({Menu: response.data.dining});
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

// search = (searchMenus) => {

//   alert(JSON.stringify(searchMenus));
 
//   const searchResult = this.state.Menu.filter();
//   searchResult.push(searchMenus);

//     this.setState({
//     searchMenus: searchResult
//   });
// }








render() {

  return (
    <div className="App">
     <div className="conatiner " id="topContainer">
      <div className ="row"> 
        <div className= "col-12">
          <Header/>
        </div>
      </div>       
      <div className="row">
        <div className="col-1"></div>
          <div className="col-10">          
            <Steps/>        
          </div>
        <div className="col-1"></div>
      </div>
      <p>Chef Privé is a new and exclusive service which allows you to search for your own private chef who can cater for events or parties.<br></br>
        Chef Privé allows you to search by date of your event, then you can search through a range of cuisines to suit your palette.<br></br> Finally, you just
        need to choose which style of menu you'd like - are you going for simple, premier or michelin?<br></br> Click seach and find a menu that's the perfect fit.<br></br> 
        Thank you for using <strong>Chef Privé</strong></p>    
      <Search searchClicked={this.searchClicked} />
      <br/>       
      <div className="row-100 d-flex justify-content-center">   
        {/* this is the code that maps the menu table to the menus. It might be worth double checking I have done this correctly as I based this on the todo app however the way in which we retrive the menus in this app is different */}
       <div className="card-columns  mr-4">
         
        {this.state.Menu.map((item, index) => {
                return <Menu Menu={item} key={index}/>
            })}    
            
              
        </div>
        
      </div>      
     </div>
    </div>
  );
}
}

export default App;
