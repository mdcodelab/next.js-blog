"use client";
import React from 'react';
import { IoMdClose } from "react-icons/io";

function BlogsModal({show, blog, onClose}) {

if(!show) {
return null;
}

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button"><IoMdClose onClick={onClose}></IoMdClose></span>
        {blog?.image && ( <img src="/images/demo.jpg" alt="blog image" className="blogs-modal-image"></img>)}
        {blog?.title && (<h2 className="blogs-modal-title">Title</h2>)}
        {blog?.content && (<p className="blogs-post-content">Content</p>)}

      </div>
    </div>
  )
}

export default BlogsModal
