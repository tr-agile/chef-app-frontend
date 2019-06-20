import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
  render() {
    return (
    <Navbar bg="light" >
        <Navbar.Brand>Chef Prive</Navbar.Brand>
    </Navbar>
    );
  } 
}

export default Header;