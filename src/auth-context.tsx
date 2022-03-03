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
  refreshBlogDb: boolean;
  setRefreshBlogDb: React.Dispatch<React.SetStateAction<any>>;
  adminLoggedIn: boolean;
  userLoggedIn: boolean;
  checkAdminLoggedIn: () => void;
  signout: () => void;
  signInWithGoogle: () => void;
}

const AuthContext = React.createContext<AppContextInterface>({
  resourcesTable: [],
  blogTable: [],
  portfolioTable: [],
  getResourceTable: () => {},
  getBlogTable: () => {},
  getPortfolioTable: () => {},
  orderByAsc: false,
  setOrderByAsc: () => {},
  refreshBlogDb: false,
  setRefreshBlogDb: () => {},
  adminLoggedIn: false,
  userLoggedIn: false,
  checkAdminLoggedIn: () => {},
  signout: () => {},
  signInWithGoogle: () => {},
});

export const AuthContextProvider = (props: Props) => {
  const [resources, setResources] = useState<any[]>([]);
  const [blog, setBlog] = useState<any[]>([]);
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [orderByAsc, setOrderByAsc] = useState<boolean>(false);
  const [refreshBlogDb, setRefreshBlogDb] = useState<boolean>(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

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

  const checkAdminLoggedIn = () => {
    const user = supabase.auth.user();
    if (user?.email === "brettsmith212@gmail.com") {
      setAdminLoggedIn(true);
    } else {
      setAdminLoggedIn(false);
    }
  };

  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
    setAdminLoggedIn(false);
    setUserLoggedIn(false);
  }

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });

    if (user) {
      console.log(user);
      setUserLoggedIn(true);
      return user;
    }
    if (error) {
      console.error(error);
      return error;
    }
  }

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
        refreshBlogDb: refreshBlogDb,
        setRefreshBlogDb: setRefreshBlogDb,
        adminLoggedIn: adminLoggedIn,
        userLoggedIn: userLoggedIn,
        checkAdminLoggedIn: checkAdminLoggedIn,
        signout: signout,
        signInWithGoogle: signInWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
