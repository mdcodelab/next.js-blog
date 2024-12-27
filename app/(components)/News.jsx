import React from 'react'
import Weather from './Weather';
import Calendar from './Calendar';


function News() {
  return (
    <div className="news">
      <header className="news-header">News header</header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">User</div>
          <div className="categories">Categories</div>
        </div>
        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">News </div>
        </div>

        <div className="my-blog">
          <Weather></Weather>
          <Calendar></Calendar>
        </div>

        <footer className="news-footer">News Footer</footer>
      </div>
    </div>
  );
}

export default News;
