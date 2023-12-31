import { useState } from "react";
import { Link } from "react-router-dom";

import { close, logo, menu } from "../assets";
import { navLinks, theme } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={logo} alt="DSA & Associates" className="w-[300px] h-[80px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal  cursor-pointer text-[16px] ${
              active === nav.title ? { theme } : "text-cyan-600"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
              handleNavLinkClick();
            }}
          >
            <Link className="no-underline hover:no-underline" to={`/${nav.id}`}>
              {nav.title}
            </Link>
            {/* <a href={`${nav.id}`}>{nav.title}</a> */}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain bg-black"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 z-10 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium  cursor-pointer text-[16px] ${
                  active === nav.title ? { theme } : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  handleNavLinkClick();
                }}
              >
                <Link
                  className="no-underline hover:no-underline"
                  to={`/${nav.id}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
