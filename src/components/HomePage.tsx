import React from "react";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <div>
        <h2>Welcome to WebGuide!</h2>
      </div>
      <div>
        <NavLink to="/theguide">The Guide</NavLink>
        <NavLink to="/brettsmith-portfolio">My Portfolio</NavLink>
      </div>
    </div>
  );
};

export default HomePage;
