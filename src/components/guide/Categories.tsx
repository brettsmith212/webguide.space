import React, { useState, useRef } from "react";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: React.FC<Props> = ({ setShow }) => {
  const cssHelpersRef = useRef<HTMLButtonElement>(null);
  const iconsRef = useRef<HTMLButtonElement>(null);
  const illustrationsRef = useRef<HTMLButtonElement>(null);
  const animationsRef = useRef<HTMLButtonElement>(null);
  const chartsRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLButtonElement>(null);

  const showResource = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <>
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
    </>
  );
};

export default Categories;
