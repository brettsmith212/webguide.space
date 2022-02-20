import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";

const pathHome = "/";
const pathGuide = "/theguide";
const pathBlog = "/blog";
const pathPortfolio = "/brettsmith-portfolio";

const active = "text-violet-500";
const inactive = "hover:text-violet-500";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});
  const location = useLocation();
  console.log(location.pathname);

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });

    if (user) {
      console.log(user);
      setLoggedIn(true);
      return user;
    }
    if (error) {
      console.error(error);
      return error;
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    setLoggedIn(false);
  }

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) {
      setUser(user);
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <nav className="flex justify-between py-8 ">
      <div>
        <NavLink to="/" className="text-2xl hover:text-violet-500">
          WebGuide
        </NavLink>
      </div>
      <div className="flex gap-8 text-xl items-center">
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
        {!loggedIn && (
          <button
            className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-6 text-white hover:bg-violet-600 hover:border-violet-600 pb-2"
            onClick={signInWithGoogle}
          >
            Login
          </button>
        )}
        {loggedIn && (
          <button
            className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-6 text-white hover:bg-violet-600 hover:border-violet-600 pb-2"
            onClick={signout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
