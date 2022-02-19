import React, { useState, useRef } from "react";
import Resources from "./resources/Resources";
import Categories from "./Categories";
import AddResource from "./AddResource";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<string>("cssHelpers");
  const [showAddResource, setShowAddResource] = useState<boolean>(false);
  const handleShowAddResource = () => {
    setShowAddResource(!showAddResource);
  };

  return (
    <section>
      <div className="flex justify-center my-8">
        <h1 className="text-2xl">Welcome to The Guide</h1>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
          onClick={handleShowAddResource}
        >
          Add Resource
        </button>
      </div>
      <div className="flex justify-center">
        {showAddResource && <AddResource />}
      </div>
      <div className="flex flex-col items-center my-16 gap-4">
        <h2 className="text-xl">Categories</h2>
        <div className="flex flex-wrap gap-4 my-4 items-center justify-center">
          <Categories setShow={setShow} />
        </div>
      </div>
      <div className="flex flex-col mb-16">
        {show && <Resources show={show} />}
      </div>
    </section>
  );
};

export default TheGuide;
