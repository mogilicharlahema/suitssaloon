import React from "react";
import bridal1 from "../Assets/bridal1.png"; 
import bridal2 from "../Assets/bridal2.png"; 
import bridal3 from "../Assets/bridal3.png"; 
import "../Styles/bridal.css";
import { useNavigate } from "react-router-dom";

const BridalPackage = () => {
  
    const navigate=useNavigate()
  const handleBridalBook=()=>{
    navigate("/book-appointment")
  }
    const menuItems = [
        { name: "Engagement Bridal Makeup HD", price: "₹15,000/-" },
        { name: "Wedding Bridal Makeup HD", price: "₹25,000/-" },
        { name: "Reception Bridal Makeup HD", price: "₹20,000/-" },
        { name: "Bridal Makeup Airbrush", price: "₹30,000/-" },
        { name: "Bridal Package", price: "₹70,000/-" },
        { name: "Party Makeup HD", price: "₹15,000/-" },
        { name: "Mehendi Makeup HD", price: "₹25,000/-" },
    ];

    return (
        <div className="bridal-package-container">
            <h1 className="main-title">Bridal Package</h1>

            <div className="image-section">
                <div className="left-image">
                    <img src={bridal1} alt="Luxury salon interior with styling chairs" />
                </div>
                <div className="right-images">
                    <img src={bridal2} alt="Makeup artist applying eyeshadow to a client" />
                    <img src={bridal3} alt="Close-up of a bride with finished makeup and jewelry" />
                </div>
            </div>

            <div className="bridal-include-section">
                <h2>What We Include In The Service</h2>
                <ul>
                    <li>Personalised consultation to understand your vision and requirements.</li>
                    <li>Understand your hair type and skin type.</li>
                    <li>Clarify if you want to use any specific products or brands.</li>
                    <li>Proper guidance to look your best on your special day.</li>
                </ul>
            </div>

            <div className="menu-section">
                <h2>Menu</h2>
                <div className="menu-items">
                    {menuItems.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <span className="service-name">{item.name}</span>
                            <span className="dashes">- - - - - -</span>
                            <span className="service-price">{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="appointment-button" onClick={handleBridalBook}>
                Book an appointment
            </button>
        </div>
    );
};

export default BridalPackage;