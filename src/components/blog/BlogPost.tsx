import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../auth-context";
import { supabase } from "../../supabaseClient";
import { BlogTableData } from "../../types";
import { NavLink } from "react-router-dom";

const BlogPost = () => {
  const [blogPost, setBlogPost] = useState<any[]>();
  const [blogTable, setBlogTable] = useState<BlogTableData>({
    id: 0,
    title: "",
    content: "",
    date: "",
    slug: "",
    author: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { slug } = useParams();
  const ctx = useContext(AuthContext);

  const handleEditPost = () => {
    setIsEditing(!isEditing);
  };

  const handleDeletePost = async () => {
    const { data, error } = await supabase
      .from("blog")
      .delete()
      .match({ id: blogTable.id });

    if (data) {
      setIsEditing(false);
      ctx.setRefreshBlogDb(!ctx.refreshBlogDb);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleSavePost = async () => {
    const { data, error } = await supabase
      .from("blog")
      .update({
        title: blogTable.title,
        content: blogTable.content,
        date: blogTable.date,
        slug: blogTable.slug,
        author: blogTable.author,
      })
      .match({ id: blogTable.id });
    if (data) {
      console.log("DATA: ", data);
      ctx.setRefreshBlogDb(!ctx.refreshBlogDb);
    }
    if (error) {
      console.log("ERROR: ", error);
    }
    setIsEditing(!isEditing);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBlogTable({
      ...blogTable,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const filteredBlog = ctx.blogTable.filter((blog) => blog.slug === slug);
    setBlogTable(filteredBlog[0]);
    const blogPostMarkdown = filteredBlog.map((blog) => (
      <div key={blog.id} className="flex flex-col">
        <h1 className="text-2xl text-center mb-8">{blog.title}</h1>
        <p className="text-sm">{blog.date}</p>
        <p className="mb-8 text-sm">By {blog.author}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
    ));
    setBlogPost(blogPostMarkdown);
  }, [slug, ctx.blogTable]);

  return (
    <div className="my-12">
      {ctx.adminLoggedIn && (
        <div className="flex gap-4 my-4 justify-between">
          {isEditing ? (
            <>
              <div className="flex gap-4">
                <button
                  onClick={handleSavePost}
                  className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600"
                >
                  Save
                </button>
                <button
                  onClick={handleEditPost}
                  className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto  text-violet-700 shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600 hover:text-white"
                >
                  Back
                </button>
              </div>
              <div>
                <NavLink to="/blog">
                  <button
                    onClick={handleDeletePost}
                    className="border-2 border-red-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto bg-red-500 text-white shadow-xl shadow-violet-500/30 hover:bg-red-600 hover:border-red-600"
                  >
                    Delete
                  </button>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4">
                <button
                  onClick={handleEditPost}
                  className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto bg-violet-500 text-white shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600"
                >
                  Edit Post
                </button>
                <NavLink
                  to="/blog"
                  className="border-2 border-violet-500 rounded-full md:text-base text-xl py-2 px-8 mb-4 w-full md:w-auto  text-violet-700 shadow-xl shadow-violet-500/30 hover:bg-violet-600 hover:border-violet-600 hover:text-white"
                >
                  Back
                </NavLink>
              </div>
            </>
          )}
        </div>
      )}
      {isEditing ? (
        <div className="flex flex-col gap-4 my-8">
          <h3 className="text-xl">Title</h3>
          <textarea
            name="title"
            cols={30}
            rows={2}
            value={blogTable.title}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Date</h3>
          <input
            type="date"
            name="date"
            value={blogTable.date}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          />
          <h3 className="text-xl">Content</h3>
          <textarea
            name="content"
            cols={30}
            rows={10}
            value={blogTable.content}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Author</h3>
          <textarea
            name="author"
            cols={30}
            rows={1}
            value={blogTable.author}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
          <h3 className="text-xl">Slug</h3>
          <textarea
            name="slug"
            cols={30}
            rows={1}
            value={blogTable.slug}
            onChange={handleOnChange}
            className="border-2 rounded-md p-2"
          ></textarea>
        </div>
      ) : (
        <div className="md:px-24 px-4">
          {blogPost ? blogPost : <p>Loading Post</p>}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
