import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Bookmarks({ bookmarks, onRemoveBookmark, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </span>
        <h2 className="bookmarks-heading">Bookmarked News</h2>
        {bookmarks.length > 0 ? (
          <div className="bookmarks-list">
            {bookmarks.map((bookmark, index) => (
              <div key={index} className="bookmark-item">
                <Image
                  src={bookmark.image || "/images/default-news.jpg"}
                  alt={bookmark.title || "No title"}
                  width={300}
                  height={150}
                />
                <h3>{bookmark.title || "No title"}</h3>
                <span
                  className="delete-button"
                  onClick={() => onRemoveBookmark(bookmark)}
                >
                  <IoMdCloseCircleOutline />
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookmarks available.</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
