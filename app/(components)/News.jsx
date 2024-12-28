import React from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";

function News() {
  return (
    <div className="news">
      {/* Header Section */}
      <header className="news-header">
        <h1>News Header</h1>
      </header>

      {/* Content Section */}
      <div className="news-content">
        <nav className="navbar">
          <div className="user">User</div>
          <div className="categories">Categories</div>
        </nav>

        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">News Grid</div>
        </div>

        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="news-footer">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export default News;
