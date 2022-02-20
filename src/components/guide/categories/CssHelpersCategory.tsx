import React, { useState, useRef } from "react";
import {
  cssHelpers,
  icons,
  illustrations,
  animations,
  charts,
  images,
} from "../../../types";

interface Props {
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string>>;
}

const CssHelpersCategory: React.FC<Props> = ({ show, setShow }) => {
  const cssHelpersRef = useRef<HTMLButtonElement>(null);
  const iconsRef = useRef<HTMLButtonElement>(null);
  const illustrationsRef = useRef<HTMLButtonElement>(null);
  const animationsRef = useRef<HTMLButtonElement>(null);
  const chartsRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLButtonElement>(null);

  const active = "bg-white text-violet-700";
  const inactive =
    "bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600";

  const showResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.target) {
      case cssHelpersRef.current:
        setShow(cssHelpers);
        break;
      case iconsRef.current:
        setShow(icons);
        break;
      case illustrationsRef.current:
        setShow(illustrations);
        break;
      case animationsRef.current:
        setShow(animations);
        break;
      case chartsRef.current:
        setShow(charts);
        break;
      case imagesRef.current:
        setShow(images);
        break;
    }
  };

  return (
    <>
      <button
        ref={cssHelpersRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === cssHelpers ? active : inactive
        }`}
        onClick={showResource}
      >
        CSS Helpers
      </button>
      <button
        ref={iconsRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === icons ? active : inactive
        }`}
        onClick={showResource}
      >
        Icons
      </button>
      <button
        ref={illustrationsRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === illustrations ? active : inactive
        }`}
        onClick={showResource}
      >
        Illustrations
      </button>
      <button
        ref={animationsRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === animations ? active : inactive
        }`}
        onClick={showResource}
      >
        Animations
      </button>
      <button
        ref={chartsRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === charts ? active : inactive
        }`}
        onClick={showResource}
      >
        Charts
      </button>
      <button
        ref={imagesRef}
        className={`border-2 border-violet-500 rounded-full py-2 px-8 ${
          show === images ? active : inactive
        }`}
        onClick={showResource}
      >
        Images
      </button>
    </>
  );
};

export default CssHelpersCategory;
