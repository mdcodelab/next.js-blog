"use client";
import React from "react";
import { useState, useEffect } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import RadioPlayer from "./RadioPlayer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoBookmarksOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";

function News() {
  const[headline, setHeadline]=useState(null);
const [news, setNews] = useState([]);
 const [isLoading, setLoading] = useState(true);

 useEffect(() => {
   const fetchNews = async () => {
     try {
       const url =
         "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=fbe7c28b4bee8e0e74169aa571e63b58";
       const response = await axios.get(url);
       setNews(response.data.articles);
       setLoading(false);
     } catch (error) {
       console.error("Error fetching news:", error);
       setLoading(false);
     }
   };
   fetchNews();
 }, []);

console.log("Newssssssssssssssssssssssssssss", news);


  return (
    <div className="news">
      {/* Header Section */}
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search news..."></input>
            <button type="submit">
              <FaMagnifyingGlass></FaMagnifyingGlass>
            </button>
          </form>
        </div>
      </header>

      {/* Content Section */}
      <div className="news-content">
        <nav className="navbar">
          <div className="user">
            <img src="images/me.jpg" alt="user"></img>
            <p>Mihaela's Blog</p>
          </div>
          <div className="categories">
            <h1 className="nav-headings">Categories</h1>
            <div className="nav-links">
              <Link href="#" className="nav-link">
                HTML & CSS
              </Link>
              <Link href="#" className="nav-link">
                Vanilla JS
              </Link>
              <Link href="#" className="nav-link">
                React.js & Next.js
              </Link>
              <Link href="#" className="nav-link">
                Back-end
              </Link>
              <Link href="#" className="nav-link">
                Bookmark{" "}
                <IoBookmarksOutline className="icon"></IoBookmarksOutline>
              </Link>
            </div>
          </div>
        </nav>

        <div className="news-section">
          <div className="headline">
            <img src="images/tech.jpg" alt="headline-image"></img>
            <h2 className="headline-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <IoBookmarksOutline className="bookmark"></IoBookmarksOutline>
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src="images/html.png" alt="news item"></img>
              <h3>Lorem ipsum dolor sit amet consectetur. <IoBookmarksOutline className="bookmark"></IoBookmarksOutline></h3>
            </div>
            <div className="news-grid-item">
              <img src="images/js.png" alt="news item"></img>
              <h3>Lorem ipsum dolor sit amet consectetur. <IoBookmarksOutline className="bookmark"></IoBookmarksOutline></h3>
            </div>
            <div className="news-grid-item">
              <img src="images/react.webp" alt="news item"></img>
              <h3>Lorem ipsum dolor sit amet consectetur.<IoBookmarksOutline className="bookmark"></IoBookmarksOutline></h3>
            </div>
            <div className="news-grid-item">
              <img src="images/react.png" alt="news item"></img>
              <h3>Lorem ipsum dolor sit amet consectetur. <IoBookmarksOutline className="bookmark"></IoBookmarksOutline></h3>
            </div>
          </div>
        </div>

        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
          <RadioPlayer></RadioPlayer>
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
