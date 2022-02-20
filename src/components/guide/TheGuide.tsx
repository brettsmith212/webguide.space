import React, { useEffect, useState } from "react";
import Resources from "./resources/Resources";
import CssHelpersCategory from "./categories/CssHelpersCategory";
import AddResource from "./AddResource";
import { supabase } from "../../supabaseClient";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<string>("cssHelpers");
  const [showAddResource, setShowAddResource] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleShowAddResource = () => {
    setShowAddResource(!showAddResource);
  };

  useEffect(() => {
    const user = supabase.auth.user();
    if (user?.email === "brettsmith212@gmail.com") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <section>
      <div className="flex justify-center items-center my-8 bg-theguide-haikei bg-cover bg-center h-80 rounded-full">
        <h1 className="text-5xl font-bold text-white">Welcome to The Guide</h1>
      </div>
      {loggedIn && (
        <div className="flex justify-end">
          {showAddResource ? (
            <button
              className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
              onClick={handleShowAddResource}
            >
              Close
            </button>
          ) : (
            <button
              className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
              onClick={handleShowAddResource}
            >
              Add Resource
            </button>
          )}
        </div>
      )}
      <div className="flex justify-center">
        {showAddResource && <AddResource />}
      </div>
      <div className="flex flex-col items-center my-20 gap-12">
        <h2 className="text-3xl text-violet-800">
          What are you building today?
        </h2>
        <div className="flex flex-wrap gap-4 my-4 items-center justify-center">
          <CssHelpersCategory setShow={setShow} show={show} />
        </div>
      </div>
      <div className="flex flex-col mb-16">
        {show && <Resources show={show} />}
      </div>
    </section>
  );
};

export default TheGuide;
