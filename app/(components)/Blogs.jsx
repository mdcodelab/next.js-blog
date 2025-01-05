"use client";
import React from 'react';
import { useBlogContext } from '../blogContext';


function Blogs() {
  const { handleBackToNews, handleSubmit, setShowForm, showForm, title, image, setImage, setTitle,
     content, setContent, handleChangeImage, submitted} = useBlogContext();

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/images/me.jpg" title="mihaela"></img>
      </div>

      <div className="blogs-right">
        {!showForm && !submitted && (
          <button className="post-btn" onClick={() => setShowForm(true)}>
            Create New Post
          </button>
        )}
        {submitted && (<p className="submission-message">Post submitted!</p>)}
        <div className={`blogs-right-form ${showForm ? "visible" : "hidden"}`}>
          <h1>New Post</h1>
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
              placeholder="Add title (max 60 characters)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
            ></input>
            <textarea
              className="text-input"
              placeholder="Add text..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
