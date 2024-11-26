import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        Ahtisham <span>Ilyas</span>
      </a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>

        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme} className="btn theme-toggle-btn">
        {theme === 'light-theme' ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>}
      </button>
    </header>
  );
}

export default Header;
