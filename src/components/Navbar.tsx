import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import ReactGA from "react-ga";
import AuthContext from "../auth-context";

const pathHome = "/";
const pathGuide = "/theguide";
const pathBlog = "/blog";
const pathPortfolio = "/brettsmith-portfolio";

const active = "text-violet-500";
const inactive = "hover:text-violet-500";

ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_CODE);

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const ctx = useContext(AuthContext);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <nav className="flex flex-col">
      <div className="flex justify-between items-center py-8 ">
        <div>
          <NavLink to="/" className="text-2xl hover:text-violet-500">
            WebGuide
          </NavLink>
        </div>
        <div className="hidden md:flex gap-8 text-xl items-center">
          <NavLink
            to="/"
            className={`${location.pathname === pathHome ? active : inactive}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/theguide"
            className={`${location.pathname === pathGuide ? active : inactive}`}
          >
            The Guide
          </NavLink>
          <NavLink
            to="/blog"
            className={`${location.pathname === pathBlog ? active : inactive}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/brettsmith-portfolio"
            className={`${
              location.pathname === pathPortfolio ? active : inactive
            }`}
          >
            Portfolio
          </NavLink>
          {/* {!ctx.userLoggedIn && (
            <button
              className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-6 text-white hover:bg-violet-600 hover:border-violet-600 pb-2"
              onClick={ctx.signInWithGoogle}
            >
              Login
            </button>
          )}
          {ctx.userLoggedIn && (
            <button
              className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-6 text-white hover:bg-violet-600 hover:border-violet-600 pb-2"
              onClick={ctx.signout}
            >
              Logout
            </button>
          )} */}
        </div>
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center">
          {!showMenu ? (
            <button onClick={handleShowMenu}>
              <img
                className="w-6 h-6"
                src="../src/assets/portfolio/hamburger.svg"
                alt="menu icon"
              />
            </button>
          ) : (
            <button onClick={handleShowMenu}>
              <img
                className="w-6 h-6"
                src="../src/assets/portfolio/cancel.svg"
                alt="menu icon"
              />
            </button>
          )}
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden flex flex-col">
          <NavLink
            className="block py-2 px-2 text-center text-violet-700 hover:bg-violet-200"
            to="/"
            onClick={handleShowMenu}
          >
            Home
          </NavLink>
          <NavLink
            className="block py-2 px-2 text-center text-violet-700 
             hover:bg-violet-200"
            to="/theguide"
            onClick={handleShowMenu}
          >
            The Guide
          </NavLink>
          <NavLink
            className="block py-2 px-2 text-center text-violet-700 
             hover:bg-violet-200"
            to="/blog"
            onClick={handleShowMenu}
          >
            Blog
          </NavLink>
          <NavLink
            className="block py-2 px-2 text-center text-violet-700 
             hover:bg-violet-200"
            to="/brettsmith-portfolio"
            onClick={handleShowMenu}
          >
            Portfolio
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default withRouter(Navbar);
