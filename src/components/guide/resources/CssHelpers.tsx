import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import data from "../guide-data";
import { Link } from "react-router-dom";

const CssHelpers = () => {
  const [cssHelpers, setCssHelpers] = useState<any[]>();
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
    const helpersArr = dataArr.map((resource) => (
      <a href={resource.url} target="_blank" key={resource.id}>
        <div className="flex flex-col border-2 rounded-md border-black w-80 h-96 p-6">
          <h3>{resource.title}</h3>
          <img src={resource.image} alt="cssfx stuff" />
          <p>{resource.subtitle}</p>
          <p>{resource.description}</p>
        </div>
      </a>
    ));
    setCssHelpers(helpersArr);
  }, [dataArr]);

  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-center">CSS Helpers</h2>
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        {!loading ? cssHelpers : <p>Loading Resouces</p>}
      </div>
    </div>
  );
};

export default CssHelpers;
