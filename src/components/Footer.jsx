import styles from "../style";
import { theme } from "../constants";

const Footer = () => (
  <section
    className={`${styles.flexCenter} py-3 flex-col`}
    style={{ background: "#00538C" }}
  >
    <p className=" font-normal text-center text-[18px] leading-[27px] text-white">
      Copyright Ⓒ 2022 DSA & Associates. All Rights Reserved.
    </p>
  </section>
);

export default Footer;
