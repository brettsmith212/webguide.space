import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../auth-context";

const Footer: React.FC = () => {
  const ctx = useContext(AuthContext);

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
        {ctx.adminLoggedIn && (
          <button className=" hover:text-violet-600 pb-2" onClick={ctx.signout}>
            Admin Logout
          </button>
        )}
        {ctx.userLoggedIn && (
          <button className=" hover:text-violet-600 pb-2" onClick={ctx.signout}>
            User Logout
          </button>
        )}
        <p className="text-sm my-8">©WebGuide 2022 </p>
      </div>
    </div>
  );
};

export default Footer;
