import React from 'react';
import "../Styles/location.css";
import mainImage from '../Assets/locatiomimg.png'; 
import mapImage from '../Assets/mapimage.png'; 

const Location = () => {
  return (
    <div className="location-section">
      <h2 className="location-main-title">Our Location</h2>
      <div className="location-image-container">
        <img
          src={mainImage}
          alt="The Suits Salon Spa Interior"
          className="location-main-image"
        />
      </div>

      <div className="location-content-wrapper">
        <div className="location-details">
          <h3 className="location-sub-title">
            <span className="location-icon"></span> 
            Location
          </h3>
          <p className="location-text">
            <strong>Phone:</strong> 040-45026989
          </p>
          <p className="location-text">
            <strong>Email:</strong> operations@thesuitssalonspa.com
          </p>
          <p className="location-text address">
            <strong>Location:</strong> 1st Floor And 2nd Floor, Plot No: 4 & 5,
            behind Image Hospital, Arunodaya Colony, Vittal Rao Nagar,
            Madhapur, Telangana - 500081
          </p>
        </div>

        <div className="location-timings">
          <h3 className="location-sub-title">
            <span className="location-icon"></span>
            Timings
          </h3>
          <p className="location-text">Every Day</p>
          <p className="location-text timing-hours">11:00 AM - 9:00 PM</p>
        </div>
      </div>

      <div className="location-map-container">
        <img
          src={mapImage}
          alt="Location map of The Suits Salon Spa"
          className="location-map-image"
        />
      </div>
    </div>
  );
};

export default Location;