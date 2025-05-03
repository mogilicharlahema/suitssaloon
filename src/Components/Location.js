import React from 'react';
import "../Styles/location.css";
import mainImage from '../Assets/locatiomimg.png';


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
  <strong>Email:</strong>{' '}
  <a href="mailto:operations@thesuitssalonspa.com" className="location-email-link">
    operations@thesuitssalonspa.com
  </a>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.327033199695!2d78.38355297594065!3d17.444054601168684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910018f8f791%3A0xf800b919cbeff8fa!2sThe%20Suits%20Salon%20%26%20Spa!5e0!3m2!1sen!2sin!4v1746094506972!5m2!1sen!2sin"
        width="1200" 
        height="450" 
        style={{ border: '0' }} 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" 
        title="The Suits Salon & Spa Location Map" 
        className='loc-map'
       >
       </iframe>
      </div>
    </div>
  );
};

export default Location;