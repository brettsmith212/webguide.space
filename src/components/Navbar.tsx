import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between px-12 py-8">
      <div>
        <NavLink to="/">WebGuide</NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/theguide">The Guide</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/brettsmith-portfolio">Portfolio</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
