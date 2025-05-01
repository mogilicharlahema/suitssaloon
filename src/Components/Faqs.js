import React, { useState } from "react";
import "../Styles/faq.css";

const FaqSection = () => {
    const FaqData = [
        {
            "question": "Do you take walk-in appointments?",
            "answer": "We welcome walk-in appointments and do our best to accommodate you based on salon availability. If you have a preferred time, we would love to help you book a future appointment with us."
        },
        {
            "question": "What is the policy if I am running late?",
            "answer": "We do our very best to hold your appointment and have 10-minute grace period. Please call the salon to let us know that you are running late and we will connect with your service provider to ensure they would still be able to take you for your service."
        },
        {
            "question": "Can I book an online appointment for another person?",
            "answer": "When booking for others, a new online profile needs to be created. If you do not want to createa new profile, please add the name of who the appointment is for in the note section of online booking."
        },
        {
            "question": "Am I able to cancel my appointment online?",
            "answer": "We ask that you please call the salon in which you are scheduled to cancel your appointment,we do not have a cancellation option online."
        },
        {
            "question": "What forms of payment do you accept?",
            "answer": "Cash, credit card and Apple pay."
        },
        {
            "question": "Can I pay with the credit card I entered online?",
            "answer": "The card you entered as part of the online booking process is simply holding your appointment and does not get applied to your service. You will have to pay for your service when you are at the salon."
        },
        {
            "question": "Can minors under the age of 18 make an appointment?",
            "answer": "If your child is under 18 and receiving a service in our spa, we will need a parental consent form signed."
        },
        {
            "question": "Can I receive a text/email reminder for my future appointments?",
            "answer": "Yes! You will receive a text about 15 minutes after the initial booking of the appointment. You will also receive a text and an email (if we have it on file) two days prior to your appointment.."
        },
    ];


    const [openIndex, setOpenIndex] = useState(null);


    const handleToggle = (index) => {

        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2 className="faq-title">FAQ'S</h2>
            <p className="faq-subtitle">Read on for some of our most commonly asked questions</p>

            <div className="faq-list">
                {FaqData.map((item, index) => {
                    const isOpen = index === openIndex;

                    const questionId = `faq-question-${index}`;
                    const answerId = `faq-answer-${index}`;

                    return (
                        <div key={index} className="faq-item">
                            
                            <div
                                className="faq-question-header"
                                onClick={() => handleToggle(index)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle(index)}
                                aria-expanded={isOpen}
                                aria-controls={answerId}
                                id={questionId}
                            >
                                <div className={`faq-arrow ${isOpen ? 'open' : ''}`}></div>
                                <span className="faq-question-text">{item.question}</span>
                            </div>

                            <div
                                id={answerId}
                                role="region"
                                aria-labelledby={questionId}
                                className={`faq-answer ${isOpen ? 'open' : ''}`}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FaqSection;