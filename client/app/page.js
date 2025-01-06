"use client";
import React from "react";
import { useBlogContext } from "./blogContext";
import News from "./(components)/News";
import Blogs from "./(components)/Blogs";

function Home() {
  const { showBlogs, showNews } = useBlogContext();

  return (
    <div className="container">
      <div className="news-blogs-app">
        {showNews && <News />}
        {showBlogs && <Blogs />}
      </div>
    </div>
  );
}

export default Home;
