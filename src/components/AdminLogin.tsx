import React, { useContext } from "react";
import AuthContext from "../auth-context";

const AdminLogin: React.FC = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-8 my-16">
      <div className="flex justify-center">
        <h1 className="text-2xl">Admin Login</h1>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3>Please Select A Single Click Login Provider</h3>
        <div className="md:w-1/2 w-full">
          <button
            className="border-2 border-violet-500 rounded-md md:text-base text-xl py-2 px-8 mb-4 w-full bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600"
            onClick={ctx.signInWithGoogle}
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
