import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

interface Props {
  children: {};
}

interface AppContextInterface {
  resourcesTable: any[];
  blogTable: any[];
  portfolioTable: any[];
  getResourceTable: () => void;
  getBlogTable: () => void;
  getPortfolioTable: () => void;
  orderByAsc: boolean;
  setOrderByAsc: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = React.createContext<AppContextInterface>({
  resourcesTable: [],
  blogTable: [],
  portfolioTable: [],
  getResourceTable: () => {},
  getBlogTable: () => {},
  getPortfolioTable: () => {},
  orderByAsc: true,
  setOrderByAsc: () => {},
});

export const AuthContextProvider = (props: Props) => {
  const [resources, setResources] = useState<any[]>([]);
  const [blog, setBlog] = useState<any[]>([]);
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [orderByAsc, setOrderByAsc] = useState<boolean>(true);

  const getResourceTable = async () => {
    const { data, error } = await supabase.from("resources").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setResources(data);
    }
  };

  const getBlogTable = async () => {
    const { data, error } = await supabase
      .from("blog")
      .select("*")
      .order("date", { ascending: orderByAsc });
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setBlog(data);
    }
  };

  const getPortfolioTable = async () => {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.log("ERROR", error);
    } else if (data) {
      setPortfolio(data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        resourcesTable: resources,
        getResourceTable: getResourceTable,
        blogTable: blog,
        getBlogTable: getBlogTable,
        portfolioTable: portfolio,
        getPortfolioTable: getPortfolioTable,
        orderByAsc: orderByAsc,
        setOrderByAsc: setOrderByAsc,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
