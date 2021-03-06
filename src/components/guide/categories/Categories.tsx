import React, { useRef } from "react";
import {
  allResources,
  cssHelpers,
  icons,
  illustrations,
  animations,
  charts,
  images,
  inspiration,
  learning,
  cheatsheets,
  web3,
} from "../../../types";

// CATEGORY BUTTON STYLING
const all =
  "border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto";
const active = "bg-white text-violet-700";
const inactive =
  "bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600";

interface Props {
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string>>;
  resourcesSection: React.RefObject<HTMLDivElement>;
}

const Categories: React.FC<Props> = ({ show, setShow, resourcesSection }) => {
  const allResourcesRef = useRef<HTMLButtonElement>(null);
  const cssHelpersRef = useRef<HTMLButtonElement>(null);
  const iconsRef = useRef<HTMLButtonElement>(null);
  const illustrationsRef = useRef<HTMLButtonElement>(null);
  const animationsRef = useRef<HTMLButtonElement>(null);
  const chartsRef = useRef<HTMLButtonElement>(null);
  const imagesRef = useRef<HTMLButtonElement>(null);
  const inspirationRef = useRef<HTMLButtonElement>(null);
  const learningRef = useRef<HTMLButtonElement>(null);
  const cheatsheetsRef = useRef<HTMLButtonElement>(null);
  const web3Ref = useRef<HTMLButtonElement>(null);

  const handleGoToResource = () => {
    window.scrollTo({
      top: resourcesSection.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const showResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.target) {
      case allResourcesRef.current:
        setShow(allResources);
        handleGoToResource();
        break;
      case cssHelpersRef.current:
        setShow(cssHelpers);
        handleGoToResource();
        break;
      case iconsRef.current:
        setShow(icons);
        handleGoToResource();
        break;
      case illustrationsRef.current:
        setShow(illustrations);
        handleGoToResource();
        break;
      case animationsRef.current:
        setShow(animations);
        handleGoToResource();
        break;
      case chartsRef.current:
        setShow(charts);
        handleGoToResource();
        break;
      case imagesRef.current:
        setShow(images);
        handleGoToResource();
        break;
      case inspirationRef.current:
        setShow(inspiration);
        handleGoToResource();
        break;
      case learningRef.current:
        setShow(learning);
        handleGoToResource();
        break;
      case cheatsheetsRef.current:
        setShow(cheatsheets);
        handleGoToResource();
        break;
      case web3Ref.current:
        setShow(web3);
        handleGoToResource();
        break;
    }
  };

  return (
    <>
      <button
        ref={allResourcesRef}
        className={`${all} ${show === allResources ? active : inactive}`}
        onClick={showResource}
      >
        All Resources
      </button>
      <button
        ref={cssHelpersRef}
        className={`${all} ${show === cssHelpers ? active : inactive}`}
        onClick={showResource}
      >
        CSS Helpers
      </button>
      <button
        ref={iconsRef}
        className={`${all} ${show === icons ? active : inactive}`}
        onClick={showResource}
      >
        Icons
      </button>
      <button
        ref={illustrationsRef}
        className={`${all} ${show === illustrations ? active : inactive}`}
        onClick={showResource}
      >
        Illustrations
      </button>
      <button
        ref={animationsRef}
        className={`${all} ${show === animations ? active : inactive}`}
        onClick={showResource}
      >
        Animations
      </button>
      <button
        ref={chartsRef}
        className={`${all} ${show === charts ? active : inactive}`}
        onClick={showResource}
      >
        Charts
      </button>
      <button
        ref={imagesRef}
        className={`${all} ${show === images ? active : inactive}`}
        onClick={showResource}
      >
        Images
      </button>
      <button
        ref={inspirationRef}
        className={`${all} ${show === inspiration ? active : inactive}`}
        onClick={showResource}
      >
        Inspiration
      </button>
      <button
        ref={learningRef}
        className={`${all} ${show === learning ? active : inactive}`}
        onClick={showResource}
      >
        Learning
      </button>
      <button
        ref={cheatsheetsRef}
        className={`${all} ${show === cheatsheets ? active : inactive}`}
        onClick={showResource}
      >
        CheatSheets
      </button>
      <button
        ref={web3Ref}
        className={`${all} ${show === web3 ? active : inactive}`}
        onClick={showResource}
      >
        Web 3
      </button>
    </>
  );
};

export default Categories;
