import React from "react";
import styles from "../style";
import { background } from "../assets";

import { Audit, Clients } from "../components/index";

const Services = () => {
  return (
    <div>
      {" "}
      {/* <img src={background} alt="" /> */}
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} mt-6`}>
          <Audit />
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default Services;
