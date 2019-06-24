import React, { Component } from 'react';
import './App.css';
import Steps from './components/Steps';
import Search from './components/Search';
import Header from './components/Header';
import Type from './components/Type';
import Menu from './components/Menu';
import Booking from './components/BookingForm';




class App extends Component  {

 state = {

  Menu: [

    {chefId: 1, typeId: 1, menuCuisine: "French",  menuMeals:"Starter: Prawn Salad, Main: Beef Shifado, Dessert: Caramel Cheesecake", menuImageFPath:"https://images.unsplash.com/photo-1556710807-81aa7ea511f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80", menuDietReqs:"Normal"},

    {chefId: 2, typeId: 2, menuCuisine: "English",  menuMeals:"Starter: Roasted Duck, Main: Celeriac Soup, Dessert: Pomegranate Salad", menuImageFPath:"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", menuDietReqs:"Gluten Free"},   

    {chefId: 2, typeId: 2, menuCuisine: "English",  menuMeals:"Starter: Roasted Duck, Main: Celeriac Soup, Dessert: Pomegranate Salad", menuImageFPath:"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", menuDietReqs:"Gluten Free"},  
    
    {chefId: 2, typeId: 2, menuCuisine: "English",  menuMeals:"Starter: Roasted Duck, Main: Celeriac Soup, Dessert: Pomegranate Salad", menuImageFPath:"https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80", menuDietReqs:"Gluten Free"}  


  ],

  ChefTable: [

      {chefId: 1, chefName: "John Peters", chefContact: "07712345678", chefLocation: "London"},

      {chefId: 2, chefName: "Peter Jones", chefContact: "07722222222", chefLocation: "Manchester"},

      {chefId: 3, chefName: "Tim Smith", chefContact: "07733332222", chefLocation: "Leeds"},

      {chefId: 4, chefName: "Sean Seams", chefContact: "07756567879", chefLocation: "London"},

      {chefId: 5, chefName: "Richard Sent", chefContact: "07712341234", chefLocation: "Manchester"}

  ]
}


search = (searchMenus) => {

  alert(JSON.stringify(searchMenus));
 
  const searchResult = this.state.Menu.filter();
  searchResult.push(searchMenus);

    this.setState({
    searchMenus: searchResult
  });
}







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
      <Search/>
      <br/>       
      <div className="row-100 d-flex justify-content-center">              
        <div className="col-5">
        {this.state.Menu.map((item, index) => {
                return <Menu Menu={item} key={index} chefId={item.chefId}/>
            })}      
          
        </div>        
        <div className="col-5">        
          <Booking/> 
        </div>
      </div>      
     </div>
    </div>
  );
}
}

export default App;
