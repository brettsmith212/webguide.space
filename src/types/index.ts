export interface ResourceArray {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  description: string;
}

export interface Show {
  cssHelpers: boolean;
  icons: boolean;
  illustrations: boolean;
  animations: boolean;
  charts: boolean;
  images: boolean;
}

export interface BlogTableData {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
  author: string;
}

export interface NewPostData {
  title: string;
  content: string;
  date: string;
  slug: string;
  author: string;
  user_id: string;
}

export const allResources = "all";
export const cssHelpers = "cssHelpers";
export const icons = "icons";
export const illustrations = "illustrations";
export const animations = "animations";
export const charts = "charts";
export const images = "images";
export const inspiration = "inspiration";
export const learning = "learning";
export const cheatsheets = "cheatsheets";
export const web3 = "web3";

export const adminEmail = "brettsmith212@gmail.com";
