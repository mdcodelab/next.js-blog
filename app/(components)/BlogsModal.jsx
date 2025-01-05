"use client";
import React from 'react';
import { IoMdClose } from "react-icons/io";

function BlogsModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button"><IoMdClose></IoMdClose></span>
        <img src="/images/demo.jpg" alt="blog image" className="blogs-modal-image"></img>
        <h2 className="blogs-modal-title">Title</h2>
        <p className="blogs-post-content">Content</p>

      </div>
    </div>
  )
}

export default BlogsModal
