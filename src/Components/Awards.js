import React from "react";
import "../Styles/awards.css"; 
import awardIcon from "../Assets/award4 (3).png";
import branchesIcon from "../Assets/award4 (4).png";
import calendarIcon from "../Assets/award4 (1).png";
import customersIcon from "../Assets/award4 (2).png";
import barnd1 from "../Assets/Brand1.png";
import barnd2 from "../Assets/Brand2.png";
import barnd3 from "../Assets/Brand3.png";
import barnd4 from "../Assets/Brand4.png";
import barnd5 from "../Assets/Brand5.png";
import barnd6 from "../Assets/Brand6.png";
import barnd7 from "../Assets/Brand7.png";
import barnd8 from "../Assets/Brand8.png";

const awardsData = [
  { id: 1, icon: awardIcon, text: "32 Awards Achieved" },
  { id: 2, icon: branchesIcon, text: "08 Branches" },
  { id: 3, icon: calendarIcon, text: "5+ Active Years" },
  { id: 4, icon: customersIcon, text: "15k+ Happy Customers" },
];

const brandImages = [
  barnd1, barnd2, barnd3, barnd4, barnd5, barnd6, barnd7, barnd8
];

const AwardsSection = () => {
  return (
    <div>
    
      <div className="awards-section-container">
        {awardsData.map((award) => (
          <div key={award.id} className="award-item">
            <div className="award-icon-wrapper">
              <img src={award.icon} alt={award.text} className="award-icon" />
            </div>
            <p className="award-text">{award.text}</p>
          </div>
        ))}
      </div>

  
      <div className="logo-scroller"> 
        <div className="scroller-inner"> 
         
          {brandImages.map((brandSrc, index) => (
            <img
              key={`brand-${index}`}
              src={brandSrc}
              alt={`Brand ${index + 1}`}
              className="brand-logo"
            />
          ))}
       
          {brandImages.map((brandSrc, index) => (
         
            <img
              key={`brand-duplicate-${index}`}
              src={brandSrc}
              alt="" 
              className="brand-logo"
              aria-hidden="true"
            />
            
          ))}
        </div>
      </div>
  

    </div>
  );
};

export default AwardsSection;