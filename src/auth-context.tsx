import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

interface Props {
  children: {};
}

interface AppContextInterface {
  resourcesTable: any[];
  getResourceTable: () => void;
}

const AuthContext = React.createContext<AppContextInterface>({
  resourcesTable: [],
  getResourceTable: () => {},
});

export const AuthContextProvider = (props: Props) => {
  const [resources, setResources] = useState<any[]>([]);

  const getResourceTable = async () => {
    const { data, error } = await supabase.from("resources").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setResources(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        resourcesTable: resources,
        getResourceTable: getResourceTable,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
