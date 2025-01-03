"use client";
import React from 'react';
import { useState } from 'react';
import News from './(components)/News';
import Blogs from "./(components)/Blogs";

function Home() {

  const [showNews, setShowNews]=useState(true);
  const [showBlogs, setShowBlogs] = useState(false);

  const handleShowBlogs = () => {
    setShowNews(false);
    setShowBlogs(true);
  }

   const handleBackToNews = () => {
     setShowNews(true);
     setShowBlogs(false);
   };

  return (
    <div className="container">
      <div className="news-blogs-app">
        {showNews && <News onShowBlogs={handleShowBlogs}></News>}
        {showBlogs && (<Blogs onShowNews={handleBackToNews}></Blogs>)}
      </div>
    </div>
  );
}

export default Home

