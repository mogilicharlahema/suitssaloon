import React from "react";
import { Link } from "react-router-dom";
import suitsIcon from "../Assets/suits-icon.png"; 

import "../Styles/footer.css";
import instagramIcon from "../Assets/instagram.png";
import facebookIcon from "../Assets/google  (1).png";
import googleIcon from "../Assets/google  (2).png"; 

const FooterSection = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

              
                <div className="footer-col footer-col-logo-social">
                    <Link to="/" className="footer-logo-link">
                        <img src={suitsIcon} alt="The Suits Salon & Spa Logo" className="footer-logo" />
                    </Link>
                    <div className="social-section">
                        <p className="follow-us-text">Follow Us</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/thesuitssalon?igsh=aGNiZDd4cmZ3Ynkz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                               <img src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61561106905978" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                               <img src={facebookIcon} alt="Facebook" />
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
                               <img src={googleIcon} alt="Google" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-col">
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/book-appointment">Book a Appointment</Link></li>
                    </ul>
                </div>

        
                <div className="footer-col">
                    <ul>
                        <li><Link to="/navservices">Services</Link></li>
                        <li><Link to="/faq">FAQ'S</Link></li>
                  
                        <li><Link to="/clients">Reviews</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <ul>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
    <p>&copy; 2021 The Suits Salon & Spa. All rights reserved</p>
</div>

        </footer>
    );
};

export default FooterSection;