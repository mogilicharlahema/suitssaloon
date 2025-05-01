import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import HeroSection from "./Components/HeroSection";
import Contact from "./Components/Contact";
import HairStylingSection from "./Components/Hairstyling";
import NailArtSection from "./Components/Nailart";
import DtanAndBleach from "./Components/Dtan";
import WaxAndThreading from "./Components/waxthread";
import ManicureAndPedicure from "./Components/Manicure";
import Facial from "./Components/Facial"; 
import BridalPackage from "./Components/Bridal";
import EyelashExtension from "./Components/Eyelash";
import Spa from "./Components/Spa"; 
import MenHairStyling from "./Components/MenHairStyling";
import MenFacial from "./Components/MenFacial";
import MenSpa from "./Components/MenSpa";
import MenShave from "./Components/Shave";
import HomeServiceSection from "./Components/HomeServices";
import NavServiceSection from "./Components/NavServices"; 
import AwardsSection from "./Components/Awards";
import ClientSection from "./Components/Clients";
import FooterSection from "./Components/Footer";
import GallerySection from "./Components/Gallery";
import Location from "./Components/Location";
import FaqSection from "./Components/Faqs";

import BookAppointment from "./Components/Appointment";
import OffersSection from "./Components/Offers";
import OffersViewSection from "./Components/OffersView";
import TermsAndConditions from "./Components/Terms";

// import MenHairColor from "./Components/MenHairColor";
// import MenHairWash from "./Components/MenHairWash";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
       
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUs />
          
            <HomeServiceSection />
            <AwardsSection />
            <OffersSection />
            <ClientSection />
          </>
        }
        />
       
        <Route path="/navservices" element={<NavServiceSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faq" element={<FaqSection />} />
        <Route path="/clients" element={<ClientSection />} />
        <Route path="/offersview" element={<OffersViewSection />} />
        <Route path="/book-appointment" element={<BookAppointment/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />

        <Route path="/services/hair-styling" element={<HairStylingSection />} />
        <Route path="/services/nail-art" element={<NailArtSection />} />
        <Route path="/services/dtan-bleach" element={<DtanAndBleach />} />
        <Route path="/services/waxing-threading" element={<WaxAndThreading />} />
        <Route path="/services/manicure-pedicure" element={<ManicureAndPedicure />} />
        <Route path="/services/facial" element={<Facial />} />
        <Route path="/services/bridal-package" element={<BridalPackage />} />
        <Route path="/services/eyelash-extension" element={<EyelashExtension />} />
        <Route path="/services/spa" element={<Spa />} />

        <Route path="/services/mens-hair-cut" element={<MenHairStyling />} />
        <Route path="/services/mens-shave" element={<MenShave />} />
        <Route path="/services/mens-facial" element={<MenFacial />} />
        <Route path="/services/mens-spa" element={<MenSpa />} />
 
        {/* <Route path="/services/mens-hair-color" element={<MenHairColor />} /> */}
        {/* <Route path="/services/mens-hair-wash" element={<MenHairWash />} /> */}


        {/* --- Remove Redundant /navservices/* Service Routes --- */}
        {/* These are no longer needed as NavServiceSection links directly to /services/* */}
        {/* <Route path="/navservices/Shave" element={<MenShave />} /> ... etc ... */}

      </Routes>

      {/* Footer should be outside Routes if you want it on every page */}
      <FooterSection />
    </Router>
  );
}

export default App;