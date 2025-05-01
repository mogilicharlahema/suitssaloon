import React from "react";
import "../Styles/offers.css";
import offerspic from "../Assets/offerpics.svg";
import { useNavigate } from "react-router-dom";

const OffersSection = () => {
  const navigate = useNavigate();

  const handleCheckOutClick = () => {
    navigate("/offersview");
  };

  return (
    <div className="offers-section-container">
      <img className="offers-image" src={offerspic} alt="Offers" />
      <button className="check-btn" onClick={handleCheckOutClick}>
        Check Out
      </button>
    </div>
  );
};

export default OffersSection;
