import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";

interface Props {
  show: string;
}

const Resources: React.FC<Props> = ({ show }) => {
  const [resources, setResources] = useState<any[]>();
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
  const [loading, setLoading] = useState<boolean>(false);

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
  }, []);

  useEffect(() => {
    const filteredResources = dataArr.filter(
      (resource) => resource.category === show
    );
    const resourcesArr = filteredResources.map((resource) => (
      <a href={resource.url} target="_blank" key={resource.id}>
        <div className="flex flex-col items-center gap-4 text-center rounded-md w-80 h-96 p-6 shadow-lg hover:scale-105 hover:bg-violet-50">
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
  }, [dataArr, show]);

  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-center text-xl">{show}</h2>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        {!loading ? resources : <p>Loading Resouces</p>}
      </div>
    </div>
  );
};

export default Resources;
