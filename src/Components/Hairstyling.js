import React from "react";
import "../Styles/Hairstyling.css"; 
import hairpic1 from "../Assets/hairpic1.png";
import hairpic2 from "../Assets/hairpic2.png";
import hairpic3 from "../Assets/hairpic3.png";
import { useNavigate } from "react-router-dom";

const HairStylingSection = () => {
  const navigate = useNavigate();
  const handleWomenBook = () => {
    navigate("/book-appointment"); 
  };

  return (
    <div className="hairstyle-container">
      <h2 className="women-section-title">Women Hair Styling</h2>

      <div className="images-grid">
        <img src={hairpic1} alt="Woman getting hair styled" className="style-img style-img1" />
        <img src={hairpic2} alt="Close up of styled hair" className="style-img style-img2" />
        <img src={hairpic3} alt="Another view of styled hair" className="style-img style-img3" />
      </div>

      <h3 className="sub-title">What We Include In The Service</h3>
      <ul className="service-list">
        <li>A personalized consultation to understand your hair goals and suggest the best styling option.</li>
        <li>A customized styling service that suits your hair type and face shape.</li>
        <li>A relaxing shampoo and conditioning treatment to prepare your hair for styling.</li>
        <li>A blow-dry and finishing style to complete your look</li>
      </ul>

      <h3 className="sub-title">Menu</h3>
      <div className="menu-list">
     
        <div className="menu-item">
          <span className="menu-item-text">
            Haircut & Styling <br /> (Starts From)
          </span>
          <span className="menu-dots">- - - - -</span> 
          <span className="menu-price">₹249/-</span>
        </div>
        <div className="menu-item">
          <span className="menu-item-text">
            Hair Straightening & smoothening <br /> (Starts From)
          </span>
          <span className="menu-dots2">- - - - -</span> 
          <span className="menu-price">₹3,500/-</span>
        </div>
        <div className="menu-item">
          <span className="menu-item-text">
            Blow Dry <br /> (Starts From)
          </span>
          <span className="menu-dots3">- - - - -</span>
          <span className="menu-price">₹299/-</span>
        </div>
        <div className="menu-item">
          <span className="menu-item-text">
            Hair coloring <br /> (Starts From)
          </span>
          <span className="menu-dots4">- - - - -</span> 
          <span className="menu-price">₹12,000/-</span>
        </div>
      </div>

      <button className="women-hair-book-btn" onClick={handleWomenBook}>
        Book an appointment
      </button>
    </div>
  );
};

export default HairStylingSection;