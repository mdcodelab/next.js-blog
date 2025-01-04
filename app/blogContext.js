"use client";
import React, { createContext, useState, useContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  //switch between News - Blogs
  const [showBlogs, setShowBlogs] = useState(false);
  const [showForm, setShowForm]=useState(false);
  const [showNews, setShowNews] = useState(true);

  const handleShowBlogs = () => {
    setShowNews(false);
    setShowBlogs(true);
  };

  const handleBackToNews = () => {
    setShowNews(true);
    setShowBlogs(false);
  };


    //from the  to create a new blog
  const [image, setImage]=useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    //blogs
    const [newBlog, setNewBlog]=useState(null);
    const [blogs, setBlogs]=useState([]);


    //functions for the form
    const handleChangeImage = (e) => {
      if(e.target.files &&e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newBlog = {
        image: image || "/images/no-img.png",
        title, 
        content};
      console.log("New blogggggggggggggggggggg:", newBlog);
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      setImage(null);
      setTitle("");
      setContent("");
      setShowForm(false);
    }

  return (
    <BlogContext.Provider
      value={{
        blogs, newBlog, handleBackToNews, handleShowBlogs,
        handleChangeImage,
        handleSubmit,
        image, setImage, title, setTitle, content, setContent,
        showForm, setShowForm, showNews, showBlogs,
        blogs
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return React.useContext(BlogContext);
};
