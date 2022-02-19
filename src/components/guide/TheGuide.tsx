import React, { useState, useRef } from "react";
import Resources from "./resources/Resources";
import { Show } from "../../types";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<string>("cssHelpers");
  const cssHelpersRef = useRef();
  const iconsRef = useRef();
  const illustrationsRef = useRef();
  const animationsRef = useRef();
  const chartsRef = useRef();
  const imagesRef = useRef();

  const showResource = (e) => {
    switch (e.target) {
      case cssHelpersRef.current:
        setShow("cssHelpers");
        break;
      case iconsRef.current:
        setShow("icons");
        break;
      case illustrationsRef.current:
        setShow("illustrations");
        break;
      case animationsRef.current:
        setShow("animations");
        break;
      case chartsRef.current:
        setShow("charts");
        break;
      case imagesRef.current:
        setShow("images");
        break;
      default:
        setShow("not working");
        break;
    }
  };

  return (
    <section>
      <div className="flex justify-center my-8">
        <h1 className="text-2xl">Welcome to The Guide</h1>
      </div>
      <div className="flex flex-col items-center my-16 gap-4">
        <h2 className="text-xl">Categories</h2>
        <ul className="flex flex-wrap gap-4 my-4 items-center justify-center">
          <button
            ref={cssHelpersRef}
            className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            CSS Helpers
          </button>
          <button
            ref={iconsRef}
            className="bg-violet-500 border-2 shadow-lg shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            Icons
          </button>
          <button
            ref={illustrationsRef}
            className="bg-violet-500 border-2 shadow-lg shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            Illustrations
          </button>
          <button
            ref={animationsRef}
            className="bg-violet-500 border-2 shadow-lg shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            Animations
          </button>
          <button
            ref={chartsRef}
            className="bg-violet-500 border-2 shadow-lg shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            Charts
          </button>
          <button
            ref={imagesRef}
            className="bg-violet-500 border-2 shadow-lg shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600"
            onClick={showResource}
          >
            Images
          </button>
        </ul>
      </div>
      <div className="flex flex-col mb-16">
        {show && <Resources show={show} />}
      </div>
    </section>
  );
};

export default TheGuide;
