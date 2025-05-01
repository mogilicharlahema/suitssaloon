import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import suitsIcon from "../Assets/suits-icon.png";
import "../Styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate=useNavigate()
  const handleIcon=()=>{
    navigate("/")
  }

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-top">
          <img className="logo" onClick={handleIcon} src={suitsIcon} alt="suits-icon" />
          <div className="mobile-toggle" onClick={toggleNavbar}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <nav className={`nav-section ${isMenuOpen ? "show" : ""}`}>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
            <Link className="links" to="/navservices">Services</Link>
            <Link className="links" to="/gallery">Gallery</Link>
            <Link className="contact-btn" to="/contact">Contact Us</Link>
          </nav>
        </div>
      </div>


    </>
  );
};

export default NavbarSection;
