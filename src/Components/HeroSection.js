import React from "react";
import heroimage from "../Assets/heroimage.png";
import herocontent from "../Assets/herocontent.png";
import "../Styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSectionPage = () => {
  const navigate=useNavigate();
  const handleHeroBookBtn=()=>{
    navigate("/book-appointment")
  }
  return (
    <>
      <div className="hero-container">
        <img className="hero-pic" src={heroimage} alt="hero-image" />
        <img className="hero-content" src={herocontent} alt="hero-content" />
        <button className="hero-book-btn" onClick={handleHeroBookBtn}>Book an Appointment</button>
      </div>
      <br></br>
    </>
  );
};

export default HeroSectionPage;
