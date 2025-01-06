"use client";
import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // Switch between News - Blogs
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

  // Form state
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Form validation
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);

  // Blogs state
  const [blogs, setBlogs] = useState([]);

  // Editing state
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Functions for the form
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size exceeds 1 MB");
      return;
    }
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 25) {
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

    // Validare titlu și conținut
    if (!title || !content) {
      if (!title) setTitleValid(false);
      if (!content) setContentValid(false);
      return;
    }

    if (isEditing && selectedPost) {
      // Actualizare blog existent
      const updatedBlogs = blogs.map((blog) =>
        blog.title === selectedPost.title
          ? { ...selectedPost, image, title, content }
          : blog
      );
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      setIsEditing(false);
      setSelectedPost(null);
    } else {
      // Crearea unui nou blog
      const newBlog = {
        image: image || "/images/no-img.png",
        title,
        content,
      };
      const updatedBlogs = [...blogs, newBlog];
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }

    // Resetarea câmpurilor
    setImage(null);
    setTitle("");
    setContent("");
    setShowForm(false);
    setSubmitted(true);

    // Resetare mesaj de succes după 3 secunde
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);



  const handleEdit = (blog) => {
    setShowNews(false);
    setShowBlogs(true);
    setSelectedPost(blog);
    setIsEditing(true);
    setTitle(blog.title);
    setContent(blog.content);
    setImage(blog.image);
  };

  const deletePost = (blog) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete the post titled "${blog.title}"?`
    );
    if (confirmation) {
      const updatedBlogs = blogs.filter((post) => post.title !== blog.title);
      setBlogs(updatedBlogs);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
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
        contentValid,
        deletePost,
        handleEdit,
        isEditing
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return React.useContext(BlogContext);
};
