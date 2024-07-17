import React from 'react';

import './Header.css'; 


function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Ahtisham <span>Ilyas</span>
      </a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
