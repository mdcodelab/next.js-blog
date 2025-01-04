"use client";
import React from 'react';
import { useState } from 'react';

function Blogs({onShowNews}) {
  const [showForm, setShowForm]=useState(false);

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/images/me.jpg" title="mihaela"></img>
      </div>

      <div className="blogs-right">
        {showForm ? (
          <div className="blogs-right-form">
            <h1>New Post</h1>
            <form>
              <div className="image-upload">
                <label htmlFor="file-upload" className="file-upload">
                  <i className="bx bx-upload"></i> Upload Image
                </label>
                <input type="file" id="file-upload"></input>
              </div>
              <input
                type="text"
                placeholder="Add title (max 60 characters)"
                className="title-input"
              ></input>
              <textarea
                className="text-input"
                placeholder="Add text..."
              ></textarea>
              <button type="submit" className="submit-btn">
                Submit
              </button>
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
