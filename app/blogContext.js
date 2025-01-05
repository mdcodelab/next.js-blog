"use client";
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  //switch between News - Blogs
  const [showBlogs, setShowBlogs] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showNews, setShowNews] = useState(true);

  const handleShowBlogs = () => {
    setShowNews(false);
    setShowBlogs(true);
  };

  const handleBackToNews = () => {
    setShowNews(true);
    setShowBlogs(false);
  };

  // from the form to create a new blog
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[submitted, setSubmitted] = useState(false);
  //form validation
  const [titleValid, setTitleValid]=useState(true);
  const [contentValid, setContentValid]=useState(true);
  // blogs
  const [newBlog, setNewBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // functions for the form
  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTitleChange = (e) => {
    if(e.target.value.length <= 25) {
      setTitle(e.target.value);
      setTitleValid(true);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setContentValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !content) {
      if(!title) setTitleValid(false);
      if(!content) setContentValid(false);
      return;
    };

    const newBlog = {
      image: image || "/images/no-img.png",
      title,
      content,
    };
    console.log("New blog created:", newBlog);
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    setImage(null);
    setTitle("");
    setContent("");
    setShowForm(false);
    setSubmitted(true);
    console.log("Submitted set to true");
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        newBlog,
        handleBackToNews,
        handleShowBlogs,
        handleChangeImage,
        handleSubmit,
        setImage,
        title,
        setTitle,
        content,
        setContent,
        showForm,
        setShowForm,
        showNews,
        showBlogs,
        submitted,
        handleTitleChange,
        handleContentChange,
        titleValid,
        contentValid
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return React.useContext(BlogContext);
};
