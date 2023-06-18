import React from "react";
import styles from "../style";

const Contact = () => {
  return (
    <section
      className={`container ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-cyan-800`}>Contact Us!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-cyan-600`}>
          <span className="text-cyan-600 font-bold">Phone :</span>{" "}
          +91-8511227935
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-cyan-600`}>
          <span className="text-cyan-600 font-bold"> Email :</span>{" "}
          dsa.associates2020@gmail.com
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-cyan-600`}>
          <span className="text-cyan-600 font-bold">Address :</span> 705,
          Samnvay Silver, B/s Royal Orchid Hotel, Akota Mujmahuda Road, Shivaji
          Circle, Vadodara - 390020
        </p>
      </div>
      <div>
        <iframe
          className="rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.767825059269!2d73.16641197474917!3d22.286783079696345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7d21a812849%3A0x8f4b458d00cd1a22!2sRoyal%20Orchid%20Central!5e0!3m2!1sen!2sca!4v1687094076177!5m2!1sen!2sca"
          width="500"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
