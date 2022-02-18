import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between my-8">
      <div>
        <NavLink to="/" className="text-2xl hover:text-violet-500">
          WebGuide
        </NavLink>
      </div>
      <div className="flex gap-4 text-xl ">
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
      </div>
    </nav>
  );
};

export default Navbar;
