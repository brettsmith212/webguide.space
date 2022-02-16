import React, { useState, useEffect } from "react";
import data from "../guide-data";

const CssHelpers = () => {
  const [cssHelpers, setCssHelpers] = useState<any[]>();

  useEffect(() => {
    const helpersArr = data.map((resource) => (
      <div
        key={resource.id}
        className="flex flex-col border-2 rounded-md border-black w-80 p-6"
      >
        <h3>{resource.title}</h3>
        <img src={resource.image} alt="cssfx stuff" />
        <p>{resource.subtitle}</p>
        <p>{resource.description}</p>
      </div>
    ));
    setCssHelpers(helpersArr);
  }, []);

  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-center">CSS Helpers</h2>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        {cssHelpers}
      </div>
    </div>
  );
};

export default CssHelpers;
