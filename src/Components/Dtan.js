import React from "react";
import "../Styles/dtan.css";
import dtan1 from "../Assets/dtan1.png";
import dtan2 from "../Assets/dtan2.png";
import dtan3 from "../Assets/dtan3.png";
import { useNavigate } from "react-router-dom";

const DtanAndBleach = () => {
  const navigate = useNavigate();
  const handleDtanBtn = () => {
    navigate("/book-appointment");
  };
  const menuItems = [
    { name: "Face & Neck", regular: "₹500/-", advance: "₹700/-" },
    { name: "Back", regular: "₹600/-", advance: "₹800/-" },
    { name: "Underarm", regular: "₹200/-", advance: "₹350/-" },
    { name: "Half Arm", regular: "₹600/-", advance: "₹800/-" },
    { name: "Full Arm", regular: "₹300/-", advance: "₹400/-" }, 
    { name: "Half Leg", regular: "₹400/-", advance: "₹700/-" },
    { name: "Full Leg", regular: "₹700/-", advance: "₹1000/-" },
    { name: "Stomach", regular: "₹350/-", advance: "₹600/-" },
    { name: "Chest", regular: "₹400/-", advance: "₹600/-" },
    { name: "Full Body", regular: "₹2,000/-", advance: "₹3,000/-" },
  ];

  return (
    <div className="dtan-container">
      <h1 className="dtan-title">D-Tan & Bleach</h1>

      <div className="dtan-image-section">
    
        <div className="dtan-image-left-wrapper">
          <img
            src={dtan1}
            alt="Salon interior with treatment bed"
            className="dtan-image" 
          />
        </div>

      
        <div className="dtan-image-right-wrapper">
          <img
            src={dtan2}
            alt="D-Tan treatment application on face"
            className="dtan-image" 
          />
          <img
            src={dtan3}
            alt="Bleach application on face"
            className="dtan-image" 
          />
        </div>
      </div>

  
      <div className="dtan-include-section">
        <h2 className="dtan-section-title">What We Include In The Service</h2>
        <ul className="dtan-include-list">
          <li>
            A personalised consultation to understand your skin type and suggest
            the best option.
          </li>
          <li>
            Determine the effectiveness of the treatment and the level of care
            required post-treatment.
          </li>
        </ul>
      </div>

     
      <div className="dtan-menu-section">
        <h2 className="dtan-section-title dtan-text-center dtan-mb-6">Menu</h2>
        <div className="dtan-menu-content">
      
          <div className="dtan-menu-grid dtan-menu-header-row">
        
            <div className="dtan-font-semibold dtan-text-lg">Service</div>
            <div className="dtan-font-semibold dtan-text-lg">Regular</div>
            <div className="dtan-font-semibold dtan-text-lg">Advance</div>
          </div>

         
          <div className="dtan-menu-items-container">
            {menuItems.map((item, index) => (
              <div key={index} className="dtan-menu-grid dtan-menu-item-row">
              
                <div>{item.name}</div>
                <div>{item.regular}</div>
                <div>{item.advance}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="dtan-button-container">
        <button className="dtan-book-button" onClick={handleDtanBtn}>
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default DtanAndBleach;