import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

interface Props {
  children: {};
}

interface AppContextInterface {
  resourcesTable: any[];
  blogTable: any[];
  getResourceTable: () => void;
  getBlogTable: () => void;
}

const AuthContext = React.createContext<AppContextInterface>({
  resourcesTable: [],
  blogTable: [],
  getResourceTable: () => {},
  getBlogTable: () => {},
});

export const AuthContextProvider = (props: Props) => {
  const [resources, setResources] = useState<any[]>([]);
  const [blog, setBlog] = useState<any[]>([]);

  const getResourceTable = async () => {
    const { data, error } = await supabase.from("resources").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setResources(data);
    }
  };

  const getBlogTable = async () => {
    const { data, error } = await supabase.from("blog").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setBlog(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        resourcesTable: resources,
        getResourceTable: getResourceTable,
        blogTable: blog,
        getBlogTable: getBlogTable,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
