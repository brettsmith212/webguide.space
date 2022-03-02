import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../auth-context";

const Blog: React.FC = () => {
  const [blog, setBlog] = useState<any[]>();
  const ctx = useContext(AuthContext);

  const handleAscOrder = () => {
    ctx.setOrderByAsc(true);
  };

  const handleDescOrder = () => {
    ctx.setOrderByAsc(false);
  };

  useEffect(() => {
    const blogArr = ctx.blogTable.map((blog) => (
      <NavLink
        key={blog.id}
        to={"/blog/" + blog.slug}
        className="py-4 px-12 border-2 rounded-md cursor-pointer flex justify-between items-center duration-300 hover:bg-violet-100 hover:scale-105"
      >
        <h3 className="text-xl">{blog.title}</h3>
        <p>{blog.date}</p>
      </NavLink>
    ));

    setBlog(blogArr);
  }, [ctx.blogTable]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-36">
      <h1 className="text-3xl">Blog</h1>
      <div className="flex justify-end gap-4 w-full px-8">
        <button onClick={handleDescOrder}>
          <img
            src="./src/assets/blog/up.svg"
            alt="up arrow"
            className="w-4 h-4 hover:scale-110"
          />
        </button>
        <button onClick={handleAscOrder}>
          <img
            src="./src/assets/blog/down.svg"
            alt="up arrow"
            className="w-4 h-4 hover:scale-110"
          />
        </button>
      </div>
      <div className="my-4 w-full flex flex-col gap-2">
        {blog ? blog : <p>Loading Blog</p>}
      </div>
    </div>
  );
};

export default Blog;
