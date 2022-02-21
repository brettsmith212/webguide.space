import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import {
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
}

const Resources: React.FC<Props> = ({ show }) => {
  const [categoryTitle, setCategoryTitle] = useState("cssHelpers");
  const [resources, setResources] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataArr, setDataArr] = useState<any[]>([
    {
      id: 0,
      title: null,
      image: null,
      subtitle: null,
      description: null,
      url: "/",
    },
  ]);

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("resources").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setDataArr(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [show]);

  useEffect(() => {
    const filteredResources = dataArr.filter(
      (resource) => resource.category === show
    );
    const resourcesArr = filteredResources.map((resource) => (
      <a href={resource.url} target="_blank" key={resource.id}>
        <div className="flex flex-col items-center gap-4 mb-4 text-center rounded-md w-80 h-96 p-6 shadow-lg hover:scale-105 hover:bg-violet-50">
          <h3 className="text-xl">{resource.title}</h3>
          <img
            className="h-32 rounded-md"
            src={resource.image}
            alt={resource.subtitle}
          />
          <p className="text-lg">{resource.subtitle}</p>
          <p className="text-sm">{resource.description}</p>
        </div>
      </a>
    ));
    setResources(resourcesArr);

    switch (show) {
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
  }, [dataArr, show]);

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h2 className="text-center text-2xl text-violet-700 bg-white rounded-full py-2 px-32 w-fit">
        {categoryTitle}
      </h2>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        {!loading ? resources : <p>Loading Resouces</p>}
      </div>
    </div>
  );
};

export default Resources;
