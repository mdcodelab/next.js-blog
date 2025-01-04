"use client";
import React from 'react';
import { useState } from 'react';

function Blogs({onShowNews, onCreateBlogProp}) {
  const [showForm, setShowForm]=useState(false);
  //for new blogs
  const [image, setImage]=useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    const newBlog = {image, title, content};
    console.log("New blogggggggggggggggggggg:", newBlog);
    onCreateBlogProp(newBlog);
    setImage(null);
    setTitle("");
    setContent("");
    setShowForm(false);
  }

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/images/me.jpg" title="mihaela"></img>
      </div>

      <div className="blogs-right">
        {showForm ? (
          <div className="blogs-right-form">
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
              <div className="image-upload">
                <label htmlFor="file-upload" className="file-upload">
                  <i className="bx bx-upload"></i> Upload Image
                </label>
                <input type="file" id="file-upload" onChange={handleChangeImage}></input>
              </div>
              <input type="text" placeholder="Add title (max 60 characters)" value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="title-input"></input>
              <textarea className="text-input" placeholder="Add text..."
              value={content} onChange={(e)=>setContent(e.target.value)}
              ></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        ) : (
          <button className="post-btn" onClick={()=> setShowForm(true)}>Create New Post</button>
        )}

      
        <button className="blogs-close-btn">
          Back <i className="bx bx-chevron-right" onClick={onShowNews}></i>
        </button>
      </div>
    </div>
  );
}

export default Blogs
