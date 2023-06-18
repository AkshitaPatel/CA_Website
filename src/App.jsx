import styles from "./style";
import React, { useState, useEffect } from "react";
import {
  Footer,
  Navbar,
  Home,
  Contact,
  About,
  Services,
  Disclaimer,
} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    // Check if user has dismissed the disclaimer
    const isDisclaimerDismissed = localStorage.getItem("disclaimerDismissed");
    if (isDisclaimerDismissed) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleDisclaimerDismiss = () => {
    // Update the state and store dismissal flag in local storage
    setShowDisclaimer(false);
    localStorage.setItem("disclaimerDismissed", true);
  };
  return (
    <div className="bg-white w-full overflow-hidden">
      {showDisclaimer && <Disclaimer onDismiss={handleDisclaimerDismiss} />}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
