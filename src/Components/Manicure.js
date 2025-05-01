import React from "react";
import manicureone from "../Assets/manicureone.png";
import manicure2 from "../Assets/manicure2.png";
import manicure3 from "../Assets/manicure3.png";
import "../Styles/manicure.css";
import { useNavigate } from "react-router-dom";

const ManicureAndPedicure = () => {
  const navigate = useNavigate();

  const handleManicureBtn = () => {
    navigate("/book-appointment");
  };
  const menuItems = [
    { name: "Cut, File, Polish", price: "₹300/-" },
    { name: "Classic Manicure", price: "₹600/-" },
    { name: "Crystal Spa Manicure", price: "₹800/-" },
    { name: "Dazzling Detan Manicure", price: "₹1,100/-" },
    { name: "Ice Cream Manicure", price: "₹1,200/-" },
    { name: "Candle Spa Manicure", price: "₹1,200/-" },
    { name: "Bombini Luxury Manicure", price: "₹1,400/-" },
  ];

  return (
    <div className="manicure-pedicure-container">
      <h1 className="mani-main-title">Manicure - Pedicure</h1>

      <div className="mani-image-gallery">
        <div className="mani-large-image-wrapper">
          <img
            src={manicureone}
            alt="Luxury pedicure station with comfortable chair"
            className="mani-large-image"
          />
        </div>
        <div className="mani-small-images-column">
          <img
            src={manicure2}
            alt="Woman receiving a pedicure treatment"
            className="mani-small-image"
          />
          <img
            src={manicure3}
            alt="Close-up of nail polish application during a manicure"
            className="mani-small-image"
          />
        </div>
      </div>

      <div className="mani-what-we-include">
        <h2 className="mani-section-title">What We Include In The Service</h2>
        {/* Keep the ul centered if desired, or adjust parent container */}
        <ul className="mani-service-list"> {/* Optional: Added class for clarity */}
          <li>
            A personalized consultation to understand your skin condition and
            preferences to choose the best option for you.
          </li>
          {/* Removed the extra li item */}
          <li>
            Proper guidance on how to care for your nails and skin after the
            treatment to maintain the results.
          </li>
        </ul>
      </div>

      <div className="mani-menu-section">
        <h2 className="mani-section-title menu-title">Menu</h2>
        <div className="mani-menu-list">
          {menuItems.map((item, index) => (
            <div key={index} className="mani-menu-item">
              <span className="mani-service-name">{item.name}</span>
              <span className="dots">- - - - - - - -</span>
              <span className="service-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mani-button-wrapper">
        <button className="mani-book-button" onClick={handleManicureBtn}>
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default ManicureAndPedicure;