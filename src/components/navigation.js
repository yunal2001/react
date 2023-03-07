import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

function Navbar() {
  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
      <div className="navbar-end">
        <a className="item-is-link">@yunalmallawaarchchi</a>
      </div>
    </div>
  );
}

export default Navbar;
