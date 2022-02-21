import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Footer = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});

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
    <div>
      <hr />
      <div className="flex flex-col gap-2 my-8 ml-4 w-fit">
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

        {!loggedIn && (
          <button
            className=" hover:text-violet-600 pb-2"
            onClick={signInWithGoogle}
          >
            Beta - Login
          </button>
        )}
        {loggedIn && (
          <button className=" hover:text-violet-600 pb-2" onClick={signout}>
            Beta - Logout
          </button>
        )}
        <p className="text-sm my-8">©WebGuide 2022 </p>
      </div>
    </div>
  );
};

export default Footer;
