import React from "react";
import shaveInside from "../Assets/shave33 (1).png"; 
import shaveAction1 from "../Assets/shave33 (2).png"; 
import shaveAction2 from "../Assets/shave33 (3).png"; 
import "../Styles/menshave.css";
import { useNavigate } from "react-router-dom";

const MenShave = () => {
  const navigate=useNavigate()
  const handleShaveBtn=()=>{
    navigate("/book-appointment")
  }
  return (
    <div className="men-shave-container">
      <h1 className="shave-title">Shave</h1>

      <div className="image-gallery">
        <div className="gallery-left">
          <img src={shaveInside} alt="Salon Interior" />
        </div>
        <div className="gallery-right">
          <img src={shaveAction1} alt="Man getting beard trim" />
          <img src={shaveAction2} alt="Man getting face shave" />
        </div>
      </div>

      <div className="service-details">
        <h2 className="section-title">What We Include In The Service</h2>
        <ul>
          <li>
            Warm lather and calming aftershave are hallmarks of a traditional
            straight razor shave
          </li>
          <li>
            Customized trimmings and shaping to fit your preferred style and
            facial shape.
          </li>
          <li>
            To soften facial hair and open pores, unwind with a warm towel
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h2 className="section-title">Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <span className="item-name">Ero Trim</span>
           
           <span className="shave-item-dots">- - - - - -</span>
            <span className="item-price">₹149/-</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Regular Shave</span>
            <span className="shave-item-dots">- - - - - -</span>
            <span className="item-price">₹199/-</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Bread Shade-Up</span>
            <span className="shave-item-dots">- - - - - -</span>
            <span className="item-price">₹249/-</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Bread Design</span>
             <span className="shave-item-dots">- - - - - -</span>
            <span className="item-price">₹349/-</span>
          </div>
          <div className="menu-item">
            <span className="item-name">Head Shave</span>
            <span className="shave-item-dots">- - - - - -</span>
            <span className="item-price">₹399/-</span>
          </div>
        </div>
      </div>

      <button className="appointment-button" onClick={handleShaveBtn}>Book an appointment</button>
    </div>
  );
};

export default MenShave;