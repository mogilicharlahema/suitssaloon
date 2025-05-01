import React from "react";
import menh1 from "../Assets/menh1.png"; 
import men2 from "../Assets/men2.png"; 
import men3 from "../Assets/men3.png"; 
import "../Styles/MenHairStyling.css";
import { useNavigate } from "react-router-dom";

const MenHairColorPage=()=>{
     const navigate=useNavigate()
      const handleMenHairClrBtn=()=>{
        navigate("/book-appointment")
      }
    return(
        <>
         <div className="men-hair-styling-container">
      <h1 className="main-title">Men Hair Coloring</h1>

      <div className="image-gallery">
        <div className="large-image-wrapper">
          <img src={menh1} alt="Salon interior with washing stations" className="gallery-image large-image" />
        </div>
        <div className="small-images-wrapper">
          <img src={men2} alt="Close up of barber cutting hair" className="gallery-image small-image" />
          <img src={men3} alt="Barber cutting hair with clippers" className="gallery-image small-image" />
        </div>
      </div>

      <div className="service-details">
        <h2 className="section-title">What We Include In The Service</h2>
        <ul>
          <li>
            A personalized consultation to understand your grooming preferences
            and recommend the ideal haircut or style.
          </li>
          <li>
            A custom styling session designed to match your hair texture,
            lifestyle, and face shape.
          </li>
          <li>
            A refreshing shampoo and conditioning treatment to cleanse and prep
            your hair for styling.
          </li>
          <li>
            A professional blow-dry and finishing touch to leave you looking
            sharp and confident
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h2 className="section-title">Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <div className="service-info">
              <span className="service-name">Haircut & Styling</span>
              
              <span className="starts-from">(Starts From)</span>
              <span className="dashesssss">- - - - - -</span>
            </div>
            <div className="dots"></div>
            <span className="service-price">₹299/-</span>
          </div>
          <div className="menu-item">
            <div className="service-info">
              <span className="service-name">Shaving</span>
              <span className="starts-from">(Starts From)</span>
              <span className="dashesssss">- - - - - -</span>
            </div>
            <div className="dots"></div>
            <span className="service-price">₹149/-</span>
          </div>
          <div className="menu-item">
            <div className="service-info">
              <span className="service-name">Blow Dry</span>
              <span className="starts-from">(Starts From)</span>
              <span className="dashesssss">- - - - - -</span>
            </div>
            <div className="dots"></div>
            <span className="service-price">₹299/-</span>
          </div>
          <div className="menu-item">
            <div className="service-info">
              <span className="service-name">Hair coloring</span>
              <span className="starts-from">(Starts From)</span>
              <span className="dashesssss">- - - - - -</span>
            </div>
            <div className="dots"></div>
            <span className="service-price">₹299/-</span>
          </div>
        </div>
      </div>

      <button className="cta-button" onClick={handleMenHairClrBtn}>Book an appointment</button>
    </div>
        </>
    )
}

export default MenHairColorPage