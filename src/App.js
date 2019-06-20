import React from 'react';
import './App.css';
import Steps from './components/Steps';
import Search from './components/Search';
import Header from './components/Header';
import Type from './components/Type';
import Menu from './components/Menu';
import Booking from './components/BookingForm';


function App() {
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
      <Type/>
      <br/>
      <div className="row-100 d-flex justify-content-center">              
        <div className="col-5">      
          <Menu/>
        </div>        
        <div className="col-5">        
          <Booking/> 
        </div>
      </div>      
     </div>
    </div>
  );
}

export default App;
