import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../Styles/appointment.css";

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: ""
    });

    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            appointment_date: formData.date,
            appointment_time: formData.time,
            user_service: formData.service
        };
        console.log("Attempting to send the following data to EmailJS:", templateParams);

        const serviceID = "service_u58x3ov";
        const templateID = "template_sxgvmwb";
        const publicKey = "uLHJUCSfjfKDZGV5W";

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then(
                (response) => {

                    console.log("SUCCESS! EmailJS response:", response.status, response.text);


                    Swal.fire({
                        icon: "success",
                        title: "Appointment Booked",
                        text: "Your appointment has been successfully booked!",
                        confirmButtonColor: "#4CAF50",
                    });

                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        time: "",
                        service: ""
                    });
                },
                (error) => {
                    console.error("FAILED... EmailJS error:", error);


                    Swal.fire({
                        icon: "error",
                        title: "Booking Failed",

                        text: `Something went wrong: ${error.text || JSON.stringify(error)}`,
                        confirmButtonColor: "#d33",
                    });
                }
            );

    };

    return (
        <div className="appointment-container">
            <h2 className="appointment-title">Book an Appointment</h2>
            <div className="form-area">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-input"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="form-group form-group-half">
                        <label htmlFor="service" className="form-label">Choose a service</label>
                        <select
                            id="service"
                            name="service"
                            className="form-input"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Choose a service --</option>
                            <option value="Facial">Facial</option>
                            <option value="Nail Art">Nail Art</option>
                            <option value="Manicure">Manicure</option>
                            <option value="Hair Style">Hair Style</option>
                            <option value="Bridal-Makeup">Bridal Makeup</option>
                            <option value="d-tan & bleach">D-tan & Bleach</option>
                            <option value="waxing&threading">Waxing & Threading</option>
                            <option value="eyelash">Eyelash Extension</option>
                            <option value="haircut">Hair Cut</option>
                            <option value="haircolor">Hair Color</option>
                            <option value="hairwash">Hair Wash</option>
                            <option value="shave">Shave</option>

                        </select>
                    </div>
                    <div className="form-row">
                        <div className="form-group form-group-half date-group">
                            <label htmlFor="date" className="form-label">Date</label>
                            <div className="date-input-wrapper">
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-input date-input"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group form-group-half">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="form-input"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>





                    </div>

                    <div className="button-container">
                        <button type="submit" className="submit-button">
                            Book an Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;