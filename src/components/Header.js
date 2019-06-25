import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import chefLogo from './Images/chefPrivenoStrap.png'

class Header extends Component {
  render() {
    return (
    <Navbar bg="white" >
        <img src={chefLogo} alt='logo' className='chefLogo' />
    </Navbar>
    );
  } 
}

export default Header;