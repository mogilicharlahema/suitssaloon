import React from "react";
import facialone from "../Assets/facialone.png"; 
import facialtwo from "../Assets/facialtwo.png";
import facialthree from "../Assets/facialthree.png";
import "../Styles/facial.css"
import { useNavigate } from "react-router-dom";

const Facial = () => {
  const navigate=useNavigate()
  const handleFacialBtn=()=>{
    navigate("/book-appointment")

    
  }
  const menuItems = [
    { name: "Fruit Clean-up (25mins)", price: "₹800/-" },
    { name: "Fruit Facial (60 mins)", price: "₹1,500/-" },
    { name: "Gold Aroma Facial (60 mins)", price: "₹1,800/-" },
    { name: "Sliver Aroma Facial (60 mins)", price: "₹1,600/-" },
    { name: "03-Facials", sub: "(Starts from)", price: "₹1,500/-" },
    { name: "N+ Facial (60mins)", sub: "(Starts from)", price: "₹1,500/-" },
    { name: "Anti Aging CC Derma", price: "₹3,500/-" },
    { name: "Cryo Derma Red Carpet Facial", price: "₹4,500/-" },
    { name: "Gold Moroccan Facial (60 Mins)", price: "₹3,500/-" },
    { name: "Lotus Facials", sub: "(Starts from)", price: "₹800/-" },
    { name: "Casmara Facials", sub: "(Starts from)", price: "₹1,800/-" },
    { name: "Dermalogica Facial", sub: "(Starts from)", price: "₹4,000/-" },
    { name: "Hydra Facial (onwards)", price: "₹5,000/- to ₹8,000/-" },
    { name: "LED Light Therapy (onwards)", price: "₹6,000/-" },
  ];

  return (
    <div className="women-facial-container">
      <h1 className="women-facial-title">Facial</h1>

      <div className="image-grid">
        <img src={facialone} alt="Facial room" className="img-large" />
        <img src={facialtwo} alt="Facial mask application" className="img-small-top" />
        <img src={facialthree} alt="Facial treatment" className="img-small-bottom" />
      </div>

      <div className="facial-include-section">
        <h2>What We Include In The Service</h2>
        <ul>
          <li>
            Personalised consultation to understand your skin type and issues.
          </li>
          <li>
            Customised options by understanding your skin health, preferences,
            and desired outcomes.
          </li>
          <li>Maximum relaxation during the facial.</li>
          <li>
            Proper guidance on how to care for your skin after the treatment to
            maintain the results.
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="item-name">
                {item.name}
                {item.sub && <span className="item-sub">{item.sub}</span>}
              </div>
              <div className="item-dots"></div>
              <div className="item-price">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="book-button" onClick={handleFacialBtn}>Book an appointment</button>
    </div>
  );
};

export default Facial;