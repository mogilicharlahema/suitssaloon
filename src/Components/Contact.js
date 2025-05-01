import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css"; 
import contactImage from "../Assets/contactpic.png";

const ContactPage = () => {
 
    const [formData, setFormData] = useState({
        user_name: "",
        user_phone: "",
        message: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, 
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_13a42sv";   
        const templateID = "template_uiuof4t";  
        const publicKey = "uLHJUCSfjfKDZGV5W";  

        const templateParams = {
            user_name: formData.user_name,
            user_phone: formData.user_phone,
            message: formData.message,
        };

        console.log("Attempting to send the following contact data to EmailJS:", templateParams);
        console.log("Using Service ID:", serviceID);
        console.log("Using Template ID:", templateID);

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                (response) => {
                   
                    console.log("SUCCESS! EmailJS response:", response.status, response.text);

                    Swal.fire({
                        icon: "success",
                        title: "Message Sent",
                        text: "Your message has been sent successfully! We'll get back to you soon.",
                        confirmButtonColor: "#4CAF50", 
                    });

                    setFormData({
                        user_name: "",
                        user_phone: "",
                        message: "",
                    });
                },
                (error) => {
              
                    console.error("FAILED... EmailJS error:", error);

          
                    Swal.fire({
                        icon: "error",
                        title: "Oops... Message Not Sent",
                       
                        text: `Something went wrong. Please try again. Error: ${error.text || JSON.stringify(error)}`,
                        confirmButtonColor: "#d33", 
                    });
                }
            );
    };


    return (
        <>
            <div>
                <h1 className="contact-name">Contact Us</h1> 
                <img className="cnt-img" src={contactImage} alt="contact background" /> 
            </div>

           
            <div className="contact-form-container"> 
                <form className="contact-form" onSubmit={handleSubmit}> 

                    <label htmlFor="user_name">Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name" 
                        placeholder="Enter your name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="user_phone">Phone Number</label>
                    <input
                        type="tel" 
                        id="user_phone"
                        name="user_phone" 
                        placeholder="Enter your phone number"
                        value={formData.user_phone}
                        onChange={handleChange}
                        required 
                    />

                    <label htmlFor="message">Send a message</label>
                    <textarea
                        id="message"
                        name="message" 
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        rows={5} 
                    />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default ContactPage;