import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="images/Doctro2.jpg" alt="Doctro Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="Home-btn">Home</Link>
        <Link to="/about" className="About-btn">About Us</Link>
        <Link to="/doctor-form" className="Doctor-btn">Doctor Login</Link>
        <Link to="/patient-form" className="Patient-btn">Patient Login</Link>
      </nav>
    </header>
  );
}

export default Header;
