import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

const AddResource: React.FC = () => {
  const [values, setValues] = useState({
    category: "",
    title: "",
    image: "",
    subtitle: "",
    description: "",
    replit: "",
    blog: "",
    url: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.from("resources").insert([
      {
        category: values.category,
        title: values.title,
        image: values.image,
        subtitle: values.subtitle,
        description: values.description,
        replit: values.replit,
        blog: values.blog,
        url: values.url,
      },
    ]);
    if (data) {
      console.log(data);
      setValues({
        category: "",
        title: "",
        image: "",
        subtitle: "",
        description: "",
        replit: "",
        blog: "",
        url: "",
      });
    }
    if (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label>
          Category
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.category}
            name="category"
          />
        </label>
        <label>
          Title
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.title}
            name="title"
          />
        </label>
        <label>
          Image
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.image}
            name="image"
          />
        </label>
        <label>
          Subtitle
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.subtitle}
            name="subtitle"
          />
        </label>
        <label>
          Description
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.description}
            name="description"
          />
        </label>
        <label>
          Replit
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.replit}
            name="replit"
          />
        </label>
        <label>
          Blog
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.blog}
            name="blog"
          />
        </label>
        <label>
          Url
          <input
            className="ml-4 p-1 border border-black rounded-md w-72"
            type="text"
            onChange={handleChange}
            value={values.url}
            name="url"
          />
        </label>
        <button className="bg-violet-500 border-2 shadow-xl shadow-violet-500/30 border-violet-500 rounded-full py-2 px-8 text-white hover:bg-violet-600 hover:border-violet-600">
          Add Resource
        </button>
      </form>
    </div>
  );
};

export default AddResource;
