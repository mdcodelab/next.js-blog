"use client";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import RadioPlayer from "./RadioPlayer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoBookmarksOutline } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";

function News() {
  const [headline, setHeadline] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url =
          "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=fbe7c28b4bee8e0e74169aa571e63b58";
        const response = await axios.get(url);
        setHeadline(response.data.articles);
        setNews(response.data.articles.slice(1, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Funcție pentru scurtarea textului
  const truncateText = (text, maxLength) => {
    if (!text) return "No title available";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="news">
      {/* Header Section */}
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search news..." />
            <button type="submit">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </header>

      {/* Content Section */}
      <div className="news-content">
        <nav className="navbar">
          <div className="user">
            <img src="images/me.jpg" alt="user" />
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
                Bookmark <IoBookmarksOutline className="icon" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="news-section">
          {/* Headline Section */}
          <div className="headline">
            <img
              src={headline[0]?.image || "images/default-headline.jpg"}
              alt={headline[0]?.title || "No headline"}
            />
            <h2 className="headline-title">
              {truncateText(headline[0]?.title, 25)}
              <IoBookmarksOutline className="bookmark" />
            </h2>
          </div>

          {/* News Grid Section */}
          <div className="news-grid">
            {isLoading ? (
              <p>Loading news...</p>
            ) : news.length > 0 ? (
              news.map((item, index) => (
                <div key={index} className="news-grid-item">
                  <img
                    src={item.image || "images/default-news.jpg"}
                    alt={item.title || "No title"}
                  />
                  <h3>
                    {truncateText(item.title, 25)}{" "}
                    <IoBookmarksOutline className="bookmark" />
                  </h3>
                </div>
              ))
            ) : (
              <p>No news available.</p>
            )}
          </div>
        </div>

        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
          {/* <RadioPlayer /> */}
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
