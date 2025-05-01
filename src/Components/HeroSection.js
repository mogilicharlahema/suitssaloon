import React from "react";
import hrimage from "../Assets/hrimage.png";
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
        <img className="hero-pic" src={hrimage} alt="hero-image" />
        <button className="hero-book-btn" onClick={handleHeroBookBtn}>Book an Appointment</button>
      </div>
      <br></br>
    </>
  );
};

export default HeroSectionPage;
