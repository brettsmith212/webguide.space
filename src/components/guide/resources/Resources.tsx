import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../auth-context";
import {
  allResources,
  cssHelpers,
  icons,
  animations,
  illustrations,
  charts,
  images,
  inspiration,
  learning,
  cheatsheets,
  web3,
} from "../../../types";

interface Props {
  show: string;
  resourcesSection: React.RefObject<HTMLDivElement>;
}

const Resources: React.FC<Props> = ({ show, resourcesSection }) => {
  const [categoryTitle, setCategoryTitle] = useState(allResources);
  const [resources, setResources] = useState<any[]>();
  const [search, setSearch] = useState<string>("");

  const ctx = useContext(AuthContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let filteredResources = [];

    if (show === "all") {
      filteredResources = ctx.resourcesTable;
    } else {
      filteredResources = ctx.resourcesTable.filter(
        (resource) => resource.category === show
      );
    }

    if (search) {
      filteredResources = filteredResources.filter((resource) => {
        return resource.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    const resourcesArr = filteredResources.map((resource) => (
      <a href={resource.url} target="_blank" key={resource.id}>
        <div className="flex flex-col items-center gap-4 mb-6 text-center rounded-md md:w-80 w-96 md:h-96 min-h-96 h-fit p-6 shadow-lg hover:scale-105 hover:bg-violet-50">
          <h3 className="md:text-xl text-3xl text-violet-700">
            {resource.title}
          </h3>
          <img
            className="h-32 rounded-md"
            src={resource.image}
            alt={resource.subtitle}
          />
          <p className="md:text-lg text-xl">{resource.subtitle}</p>
          <p className="md:text-sm">{resource.description}</p>
        </div>
      </a>
    ));
    setResources(resourcesArr);

    switch (show) {
      case allResources:
        setCategoryTitle("All Resources");
        break;
      case cssHelpers:
        setCategoryTitle("CSS Helpers");
        break;
      case icons:
        setCategoryTitle("Icons");
        break;
      case illustrations:
        setCategoryTitle("Illustrations");
        break;
      case animations:
        setCategoryTitle("Animations");
        break;
      case charts:
        setCategoryTitle("Charts");
        break;
      case images:
        setCategoryTitle("Images");
        break;
      case inspiration:
        setCategoryTitle("Inspiration");
        break;
      case learning:
        setCategoryTitle("Learning");
        break;
      case cheatsheets:
        setCategoryTitle("CheatSheets");
        break;
      case web3:
        setCategoryTitle("Web 3");
        break;
    }
  }, [show, search, ctx.resourcesTable]);

  return (
    <div
      ref={resourcesSection}
      className="flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-center text-2xl text-violet-700 bg-white rounded-full py-2 px-32 w-fit">
        {categoryTitle}
      </h2>
      <div className="w-full flex justify-center px-12">
        <input
          className="border-2 border-gray-300 rounded-md py-2 px-4 w-full"
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        {resources}
      </div>
    </div>
  );
};

export default Resources;
