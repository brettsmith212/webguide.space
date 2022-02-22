import React from "react";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center my-16 gap-8 bg-blob-haikei bg-cover rounded-md">
      <div className="flex flex-col gap-8 md:w-1/2">
        <div className="flex flex-col gap-4">
          <h3 className="uppercase text-xl">
            Welcome to{" "}
            <span className="text-violet-500 lg:text-red-300">WebGuide</span>
          </h3>
          <h2 className="text-3xl">
            A repository for the best web development resources
          </h2>
          <p>
            WebGuide is a simple way to have all of the best resources for web
            developers in one place. It's free, easily accessible and always
            up-to-date
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <NavLink
            to="/theguide"
            className="text-center bg-violet-500 border-2 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
          >
            The Guide
          </NavLink>
          <NavLink
            to="/brettsmith-portfolio"
            className="text-center border-2 text-violet-500 border-violet-500 rounded-full py-2 px-8 hover:text-white hover:bg-violet-500"
          >
            My Portfolio
          </NavLink>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="src/assets/homepage/buildingblocks.svg"
          alt="webguide helps developers build!"
          className="w-96 h-96"
        />
      </div>
    </section>
  );
};

export default HomePage;
