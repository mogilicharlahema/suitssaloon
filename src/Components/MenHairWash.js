import React from "react";
import menh1 from "../Assets/menh1.png";
import men2 from "../Assets/men2.png";
import men3 from "../Assets/men3.png";
import "../Styles/MenHairStyling.css";
import { useNavigate } from "react-router-dom";


const MenHairStyling = () => {
  const navigate=useNavigate()
  const handleMenHairBtn=()=>{
    navigate("/book-appointment")
  }
  return (
    <div className="men-hair-styling-container">
      <h1 className="main-title">Men Hair Wash</h1>

      <div className="men-image-gallery">
        <div className="men-large-image-wrapper">
          <img src={menh1} alt="Man getting a stylish haircut in a salon" className="men-gallery-image large-image" />
        </div>
        <div className="men-small-images-wrapper">
          <img src={men2} alt="Close up of barber trimming hair details" className="men-gallery-image small-image" />
          <img src={men3} alt="Barber using clippers on a client's hair" className="men-gallery-image small-image" />
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
            A professional blow-dry and finishing touch to leave you looking
            sharp and confident
          </li>
        </ul>
      </div>

      
      <div className="hair-menu-section">
        <h2 className="section-title">Menu</h2>
    
        <div className="hair-menu-items">
      
          <div className="hair-menu-item">
          
            <div className="hair-service-info">
              <span className="hair-service-name">Haircut & Styling</span>
              <span className="hair-starts-from">(Starts From)</span>
             
              <span className="dashesssss">- - - - - -</span>
            </div>
           
            <span className="hair-service-price">₹299/-</span>
          </div>

          <div className="hair-menu-item">
            <div className="hair-service-info">
              <span className="hair-service-name">Shaving</span>
              <span className="hair-starts-from">(Starts From)</span>
              <span className="dashesssss">- - - - - -</span>
            </div>
            <span className="hair-service-price">₹149/-</span>
          </div>

          <div className="hair-menu-item">
            <div className="hair-service-info">
              <span className="hair-service-name">Blow Dry</span>
              <span className="hair-starts-from">(Starts From)</span>
               <span className="dashesssss">- - - - - -</span>
            </div>
            <span className="hair-service-price">₹299/-</span>
          </div>

          <div className="hair-menu-item">
            <div className="hair-service-info">
              <span className="hair-service-name">Hair coloring</span>
              <span className="hair-starts-from">(Starts From)</span>
               <span className="dashesssss">- - - - - -</span>
            </div>
            <span className="hair-service-price">₹299/-</span>
          </div>
        </div>
      </div>

      <button className="cta-button" onClick={handleMenHairBtn}>Book an appointment</button>
    </div>
  );
};

export default MenHairStyling;