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
          <a href="tel:+918511227935" className="text-cyan-600">
            +91-8511227935
          </a>
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-cyan-600`}>
          <span className="text-cyan-600 font-bold"> Email :</span>{" "}
          <a
            href="mailto:dsa.associates2020@gmail.com"
            className="text-cyan-600"
          >
            dsa.associates2020@gmail.com
          </a>
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-cyan-600`}>
          <span className="text-cyan-600 font-bold">Address :</span> 705,
          Samnvay Silver, B/s Royal Orchid Hotel, Akota Mujmahuda Road, Shivaji
          Circle, Vadodara - 390020
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118136.83017947908!2d73.098570799273!3d22.286475677624047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc70bfc728227%3A0xf0fc9b06e3f587b0!2sDSA%20%26%20ASSOCIATES!5e0!3m2!1sen!2sca!4v1687925009623!5m2!1sen!2sca"
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
