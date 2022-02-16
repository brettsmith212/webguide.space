import React, { useState } from "react";
import CssHelpers from "./resources/CssHelpers";
import { Show } from "../../types";

const TheGuide: React.FC = () => {
  const [show, setShow] = useState<Show>({
    cssHelpers: true,
    icons: false,
    illustrations: false,
    animations: false,
    charts: false,
    images: false,
  });

  return (
    <section>
      <div className="flex justify-center my-8">
        <h1>Welcome to The Guide</h1>
      </div>
      <div className="flex flex-col items-center my-8">
        Categories
        <ul className="flex gap-4 my-4">
          <button
            onClick={() => {
              setShow({
                cssHelpers: true,
                icons: false,
                illustrations: false,
                animations: false,
                charts: false,
                images: false,
              });
            }}
          >
            CSS Helpers
          </button>
          <button
            onClick={() => {
              setShow({
                cssHelpers: false,
                icons: true,
                illustrations: false,
                animations: false,
                charts: false,
                images: false,
              });
            }}
          >
            Icons
          </button>
          <button
            onClick={() => {
              setShow({
                cssHelpers: false,
                icons: false,
                illustrations: true,
                animations: false,
                charts: false,
                images: false,
              });
            }}
          >
            Illustrations
          </button>
          <button
            onClick={() => {
              setShow({
                cssHelpers: false,
                icons: false,
                illustrations: false,
                animations: true,
                charts: false,
                images: false,
              });
            }}
          >
            Animations
          </button>
          <button
            onClick={() => {
              setShow({
                cssHelpers: false,
                icons: false,
                illustrations: false,
                animations: false,
                charts: true,
                images: false,
              });
            }}
          >
            Charts
          </button>
          <button
            onClick={() => {
              setShow({
                cssHelpers: false,
                icons: false,
                illustrations: false,
                animations: false,
                charts: false,
                images: true,
              });
            }}
          >
            Images
          </button>
        </ul>
      </div>
      <div className="flex flex-col">{show.cssHelpers && <CssHelpers />}</div>
    </section>
  );
};

export default TheGuide;
