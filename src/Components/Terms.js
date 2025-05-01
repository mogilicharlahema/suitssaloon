import React from "react";
import "../Styles/terms.css"

const TermsAndConditions = () => {
    return (

        <div className="terms-container" style={{ padding: '20px', fontFamily: 'sans-serif', color: '#333' }}> {/* Basic inline styles for demo */}

            <div className="terms-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0 0 5px 0' }}>The Suits Salon & Spa</h2>
                <h3 style={{ fontSize: '1.5em', fontWeight: 'normal', margin: '0 0 10px 0' }}>Terms & Conditions</h3>
                <p style={{ fontSize: '1em', color: '#555', margin: '0' }}>Last Modified: 2024</p>
            </div>



            <section className="terms-section" style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '10px' }}>License</h4>

                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    Unless otherwise stated, Cole's Salon and/or its licensors own the intellectual property rights for all material on Cole's Salon website. All intellectual property rights are reserved. You may access this from Cole's Salon website for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
            </section>

            <section className="terms-section" style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '10px' }}>You must not:</h4>
                <ul style={{ listStyle: 'disc', marginLeft: '20px', lineHeight: '1.6' }}>
                    <li>Republish material from The Suits Salon & Spa</li>
                    <li>Sell, rent or sub-license material from The Suits Salon & Spa</li>
                    <li>Reproduce, duplicate or copy material from The Suits Salon & Spa</li>
                    <li>Redistribute content from The Suits Salon & Spa</li>
                </ul>
            </section>

            <section className="terms-section" style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '10px' }}>Conditions & Terms</h4>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    The Suits Salon & Spa welcomes you!
                </p>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    The guidelines for using The Suits Salon & Spa, which may be found at <a href="https://thesuitssalonspa.com/" target="_blank" rel="noopener noreferrer">https://thesuitssalonspa.com/</a>, are described in these terms and conditions.
                </p>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    We presume that you agree to these terms and conditions by using this website. If you do not accept all of the terms and conditions listed here, stop using the Suits Salon & Spa website.
                </p>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person logs on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of The United States. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
            </section>



            <section className="terms-section" style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1.3em', fontWeight: 'bold', marginBottom: '10px' }}>Disclaimer</h4>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul style={{ listStyle: 'disc', marginLeft: '20px', lineHeight: '1.6', marginBottom: '10px' }}>
                    <li>limit or exclude our or your liability for death or personal injury;</li>
                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>
                <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
            </section>

        </div>
    );
}

export default TermsAndConditions;