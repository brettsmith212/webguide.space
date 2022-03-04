import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../auth-context";
import { supabase } from "../../supabaseClient";
import { NewPostData } from "../../types";

const Blog: React.FC = () => {
  const [blog, setBlog] = useState<any[]>();
  const [newPost, setNewPost] = useState<NewPostData>({
    title: "",
    author: "",
    content: "",
    date: "",
    slug: "",
    user_id: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const ctx = useContext(AuthContext);

  const handleAscOrder = () => {
    ctx.setOrderByAsc(true);
  };

  const handleDescOrder = () => {
    ctx.setOrderByAsc(false);
  };

  const handleAddPost = () => {
    setIsEditing(!isEditing);
  };

  const handleSavePost = async () => {
    const user = supabase.auth.user();
    const { data, error } = await supabase.from("blog").insert([
      {
        title: newPost.title,
        author: newPost.author,
        content: newPost.content,
        date: newPost.date,
        slug: newPost.slug,
        user_id: user?.id,
      },
    ]);

    if (data) {
      console.log(data);
      setIsEditing(!isEditing);
      ctx.setRefreshBlogDb(!ctx.refreshBlogDb);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const blogArr = ctx.blogTable.map((blog) => (
      <NavLink
        key={blog.id}
        to={"/blog/" + blog.slug}
        className="py-4 px-12 border-2 rounded-md cursor-pointer flex flex-wrap gap-4 justify-between duration-300 hover:bg-violet-100 hover:scale-105"
      >
        <h3 className="md:text-xl text-sm">{blog.title}</h3>
        <p className="md:text-base text-sm">{blog.date}</p>
      </NavLink>
    ));

    setBlog(blogArr);
  }, [ctx.blogTable]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-36">
      <h1 className="text-3xl">Blog</h1>
      {ctx.adminLoggedIn && (
        <div className="w-full flex justify-end">
          {!isEditing ? (
            <button
              onClick={handleAddPost}
              className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600"
            >
              Add Post
            </button>
          ) : (
            <button
              onClick={handleSavePost}
              className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600"
            >
              Save Post
            </button>
          )}
        </div>
      )}
      {isEditing && (
        <div className="flex flex-col gap-4 my-8 w-full">
          <h3 className="text-xl">Title</h3>
          <textarea
            name="title"
            cols={30}
            rows={2}
            value={newPost.title}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Date</h3>
          <input
            type="date"
            name="date"
            value={newPost.date}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          />
          <h3 className="text-xl">Content</h3>
          <textarea
            name="content"
            cols={30}
            rows={10}
            value={newPost.content}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Author</h3>
          <textarea
            name="author"
            cols={30}
            rows={1}
            value={newPost.author}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Slug</h3>
          <textarea
            name="slug"
            cols={30}
            rows={1}
            value={newPost.slug}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
        </div>
      )}
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
