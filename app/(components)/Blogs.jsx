"use client";
import React from 'react';
import { useBlogContext } from '../blogContext';


function Blogs() {
  const { handleBackToNews, handleSubmit, setShowForm, showForm, title, setTitle, image, setImage,
     content, setContent, handleChangeImage, submitted, handleTitleChange, handleContentChange,
    titleValid, contentValid, isEditing} = useBlogContext();

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/images/me.jpg" title="mihaela"></img>
      </div>

      <div className="blogs-right">
        {!showForm && !submitted && (
          <button className="post-btn" onClick={() => setShowForm(true)}>
            {isEditing ? "Edit Post" : "Create New Post"}
          </button>
        )}
        {submitted && <p className="submission-message">Post submitted!</p>}
        <div className={`blogs-right-form ${showForm ? "visible" : "hidden"}`}>
          <h1>{isEditing ? "Edit Post" : "New Post"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="image-upload">
              <label htmlFor="file-upload" className="file-upload">
                <i className="bx bx-upload"></i> Upload Image
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleChangeImage}
              ></input>
            </div>
            <input
              type="text"
              placeholder="Add title (max 25 characters)"
              value={title}
              onChange={handleTitleChange}
              className={`title-input ${!titleValid ? "invalid" : ""}`}
            ></input>
            <textarea
              className={`text-input ${!contentValid ? "invalid" : ""}`}
              placeholder="Add text..."
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <button className="blogs-close-btn">
          Back{" "}
          <i className="bx bx-chevron-right" onClick={handleBackToNews}></i>
        </button>
      </div>
    </div>
  );
}

export default Blogs
