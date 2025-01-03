import React from 'react'

function Blogs() {
  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/images/me.jpg" title="mihaela"></img>
      </div>
      <div className="blogs-right">
        <button className="post-btn">Create New Post</button>
        <button className="blogs-close-btn">Back <i className="bx bx-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Blogs
