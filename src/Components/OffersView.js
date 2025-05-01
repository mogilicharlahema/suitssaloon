import React from "react";
import offer1 from "../Assets/offer1 (1).png"; 
import offer2 from "../Assets/offer1 (2).png"; 
import "../Styles/offersview.css";
import { useNavigate } from "react-router-dom";

const OffersViewSection = () => {
     const navigate = useNavigate();
     const handleBookBtn = () => {
        navigate("/book-appointment");
      };
    return (
        <div className="offers-container">
            <h2 className="offers-title">Glow More, Pay Less</h2>

            <div className="offers-body">
               
                <img src={offer1} alt="Woman getting hair styled" className="bg-image bg-image-left" />
                <img src={offer2} alt="Man getting haircut" className="bg-image bg-image-right" />

             
                <div className="content-block">
                    <div className="servicess-section">
                        <h3 className="servicess-title">Woman Services</h3>
                        <ul className="servicess-list">
                            <li className="servicess-item">
                                <span className="servicess-details">Haircut + Face D Tab + Eyebrows Threading - 499/-</span>
                                
                            </li>
                            <li className="servicess-item">
                                <span className="servicess-details">Hydra Facial + Full Arm Wax - 1499/-</span>
                                <span className="complimentary-offer">→ (Complimentary - Threading)</span>
                               
                            </li>
                            <li className="servicess-item">
                                <span className="servicess-details">Korean Glow Facial + Haircut + Pedicure - 2,499/-</span>
                                <span className="complimentary-offer">→ (Complimentary - Full Arm Wax (Rica))</span>
                            </li>
                            <li className="servicess-item">
                                <span className="servicess-details">Haircut + Hair Spa + Facial + Full Arm & Full Leg + Pedicure (Rica) + Eye Brows - 2,499/-</span>
                              
                            </li>
                        </ul>
                    </div>

                    <div className="servicess-section">
                        <h3 className="servicess-title">Man Services</h3>
                        <ul className="servicess-list">
                            <li className="servicess-item">
                                <span className="servicess-details">Beard + Haircut + Body Massage - 1,999/-</span>
                                <span className="complimentary-offer">→ (Complimentary - Pedicure)</span>
                            </li>
                            <li className="servicess-item">
                                <span className="servicess-details">Beard + Haircut + D Tan - 399/-</span>
                            </li>
                            <li className="servicess-item">
                                <span className="servicess-details">Haircut + Bread + Clean Up - 699/-</span>
                               
                            </li>
                             <li className="servicess-item">
                                <span className="servicess-details">Body Massage + Body Scrub + Haircut + Bread - 2,999/-</span>
                              
                            </li>
                        </ul>
                    </div>

                    <button className="cta-button" onClick={handleBookBtn}>
                        Book an appointment 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OffersViewSection;