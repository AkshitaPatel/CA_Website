import React from "react";
import styles from "../style";
import { Business, Hero, FeedbackCard } from "../components/index";
import { feedback } from "../constants";

const Home = () => {
  return (
    <div>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Business />
        </div>
      </div>
    </div>
  );
};

export default Home;
