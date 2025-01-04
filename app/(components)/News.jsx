"use client";
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import Footer from "./Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoBookmarksOutline, IoBookmarksSharp } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";
import Link from "next/link";
import axios from "axios";
import NewsModal from "./NewsModal";
import Bookmarks from "./Bookmarks";
import { useBlogContext } from "../blogContext";

function News({onShowBlogs, blogs}) {
  const { handleShowBlogs } = useBlogContext();
  
  const [headline, setHeadline] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const categories = ["general", "technology", "science", "health", "sports"];
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Blogssssssssssssssssssssssssssss", blogs);

  // Fetch News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const url = searchQuery
          ? `https://gnews.io/api/v4/search?q=${encodeURIComponent(
              searchQuery
            )}&lang=en&apikey=fbe7c28b4bee8e0e74169aa571e63b58`
          : `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=us&max=10&apikey=fbe7c28b4bee8e0e74169aa571e63b58`;

        const response = await axios.get(url);

        setHeadline(response.data.articles || []);
        setNews(response.data.articles?.slice(1, 5) || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory, searchQuery]);

  // Funcție pentru scurtarea textului
  const truncateText = (text, maxLength) => {
    if (!text) return "No title available";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Setăm categoria
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setSearchQuery("");
  };

  // Handluim căutarea
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchInput.trim()) {
      setSearchQuery(searchInput.trim());
    }
    setSearchInput("");
  };

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  // Bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (savedBookmarks) {
      setBookmarks(savedBookmarks);
    }
  }, []);

  const handleBookmarkClick = (article) => {
    setBookmarks((prevBookmarks) => {
      const isAlreadyBookmarked = prevBookmarks.some(
        (bookmark) => bookmark.title === article.title
      );

      if (isAlreadyBookmarked) {
        const updatedBookmarks = prevBookmarks.filter(
          (bookmark) => bookmark.title !== article.title
        );
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      } else {
        const updatedBookmarks = [...prevBookmarks, article];
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        return updatedBookmarks;
      }
    });
  };

  const handleRemoveBookmark = (article) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.title !== article.title
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="news">
      {/* Header Section */}
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search news..."
            />
            <button type="submit">
              <FaMagnifyingGlass />
            </button>
          </form>
        </div>
      </header>

      {/* Content Section */}
      <div className="news-content">
        <nav className="navbar">
          <div className="user" onClick={handleShowBlogs}>
            <img src="/images/me.jpg" alt="user" />
            <p>Mihaela's Blog</p>
          </div>
          <div className="categories">
            <h1 className="nav-headings">Categories</h1>
            <div className="nav-links">
              {categories.map((category) => (
                <Link
                  key={category}
                  href="#"
                  onClick={(e) => handleCategoryClick(e, category)}
                  className="nav-link"
                >
                  {category}
                </Link>
              ))}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBookmarksModal(true);
                }}
                className="nav-link"
              >
                Bookmarks <IoBookmarksOutline className="icon" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="news-section">
          {/* Headline Section */}
          <div
            className="headline"
            onClick={() => handleArticleClick(headline[0])}
          >
            <img
              src={headline[0]?.image || "/images/default-headline.jpg"}
              alt={headline[0]?.title || "No headline"}
            />
            <h2 className="headline-title">
              {truncateText(headline[0]?.title, 20)}
              {bookmarks.some(
                (bookmark) => bookmark.title === headline[0]?.title
              ) ? (
                <IoBookmarksSharp
                  className="bookmark"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmarkClick(headline[0]);
                  }}
                />
              ) : (
                <IoBookmarksOutline
                  className="bookmark"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmarkClick(headline[0]);
                  }}
                />
              )}
            </h2>
          </div>

          {/* News Grid Section */}
          <div className="news-grid">
            {isLoading ? (
              <p>Loading news...</p>
            ) : news.length > 0 ? (
              news.map((item, index) => (
                <div
                  key={index}
                  className="news-grid-item"
                  onClick={() => handleArticleClick(item)}
                >
                  <img
                    src={item.image || "/images/default-news.jpg"}
                    alt={item.title || "No title"}
                  />
                  <h3>
                    {truncateText(item.title, 20)}{" "}
                    {bookmarks.some(
                      (bookmark) => bookmark.title === item.title
                    ) ? (
                      <IoBookmarksSharp
                        className="bookmark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmarkClick(item);
                        }}
                      />
                    ) : (
                      <IoBookmarksOutline
                        className="bookmark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmarkClick(item);
                        }}
                      />
                    )}
                  </h3>
                </div>
              ))
            ) : (
              <p>No news available.</p>
            )}
          </div>
        </div>

        {showBookmarksModal && (
          <Bookmarks
            bookmarks={bookmarks}
            onRemoveBookmark={handleRemoveBookmark}
            onClose={() => setShowBookmarksModal(false)}
          />
        )}

        <div className="my-blogs">
          <h1 className="my-blogs-heading">My Blogs</h1>
          <div className="blog-posts">
            {blogs?.map((blog, index) => {
              return (<div className="blog-post" key={index}>
                <img src={blog.image} alt={blog.title}></img>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="post-buttons">
                  <button className="edit-post"><i className="bx bxs-edit"></i></button>
                 <button className="delete-post"><i className="bx bx-x-circle"></i></button>
                 <button className="more-post"><RxDoubleArrowRight></RxDoubleArrowRight></button>
                </div>
              </div>)

            })}
          </div>
        </div>

        <NewsModal
          show={showModal}
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="news-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default News;
