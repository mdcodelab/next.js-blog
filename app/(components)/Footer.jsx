import React from 'react'

function Footer() {
  return (
    <div className="news-footer">
      <p>
        <span>News & Blogs</span>
      </p>
      <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
    </div>
  );
}

export default Footer
