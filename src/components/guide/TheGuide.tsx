import React, { useState, useRef, useContext } from "react";
import Resources from "./resources/Resources";
import Categories from "./categories/Categories";
import AddResource from "./resources/AddResource";
import { allResources } from "../../types";
import AuthContext from "../../auth-context";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<string>(allResources);
  const [showAddResource, setShowAddResource] = useState<boolean>(false);
  const resourcesSection = useRef<HTMLDivElement>(null);
  const ctx = useContext(AuthContext);

  const handleShowAddResource = () => {
    setShowAddResource(!showAddResource);
  };

  return (
    <section>
      <div className="flex justify-center items-center my-8 bg-theguide-haikei bg-cover bg-center h-80 rounded-full">
        <h1 className="md:text-5xl text-3xl font-bold text-white text-center">
          Welcome to The Guide
        </h1>
      </div>
      {ctx.adminLoggedIn && (
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
        <h2 className="md:text-3xl text-2xl text-violet-800">
          What are you working on today?
        </h2>
        <div className="flex md:flex-wrap md:flex-row flex-col gap-4 my-4 items-center justify-center w-full md:w-auto">
          <Categories
            setShow={setShow}
            show={show}
            resourcesSection={resourcesSection}
          />
        </div>
      </div>
      <div className="flex flex-col mb-16">
        {show && <Resources show={show} resourcesSection={resourcesSection} />}
      </div>
    </section>
  );
};

export default TheGuide;
