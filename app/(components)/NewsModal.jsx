import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function NewsModal({ show, article, onClose }) {
  if (!show) {
    return null;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </span>
        {article && (
          <>
            {article.image && (
              <img
                src={article.image}
                alt={article.title || "News image"}
                className="modal-image"
              />
            )}
            <h2 className="modal-title">
              {article.title || "No title available"}
            </h2>
            <p className="modal-source">
              Source: {article.source?.name || "Unknown"}
            </p>
            <p className="modal-date">
              {article.publishedAt
                ? formatDate(article.publishedAt)
                : "Unknown date"}
            </p>
            <p className="modal-content-text">
              {article.content || "No additional content available."}
            </p>
            <a
              href={article.url}
              className="read-more-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsModal;
