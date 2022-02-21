import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex flex-col gap-2 my-8 ml-4">
        <NavLink to="/" className="hover:text-violet-500">
          Home
        </NavLink>
        <NavLink to="/theguide" className="hover:text-violet-500">
          The Guide
        </NavLink>
        <NavLink to="/blog" className="hover:text-violet-500">
          Blog
        </NavLink>
        <NavLink to="/brettsmith-portfolio" className="hover:text-violet-500">
          Portfolio
        </NavLink>
        <p className="text-sm">©WebGuide 2022 </p>
      </div>
    </div>
  );
};

export default Footer;
