import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../auth-context";

const BlogPost = () => {
  const [blogPost, setBlogPost] = useState<any[]>();
  const { slug } = useParams();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const filteredBlog = ctx.blogTable.filter((blog) => blog.slug === slug);
    const blogPostMarkdown = filteredBlog.map((blog) => (
      <div key={blog.id} className="flex flex-col">
        <h1 className="text-2xl text-center">{blog.title}</h1>
        <p>{blog.date}</p>
        <p className="mb-8">By {blog.author}</p>
        <div>{blog.content}</div>
      </div>
    ));
    setBlogPost(blogPostMarkdown);
  }, [slug, ctx.blogTable]);

  return (
    <div className="my-12">{blogPost ? blogPost : <p>Loading Post</p>}</div>
  );
};

export default BlogPost;
