import React, { useState, useRef } from "react";
import Resources from "./resources/Resources";
import Categories from "./Categories";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<string>("cssHelpers");

  return (
    <section>
      <div className="flex justify-center my-8">
        <h1 className="text-2xl">Welcome to The Guide</h1>
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
