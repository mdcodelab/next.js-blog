import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image';
import { IoMdCloseCircleOutline } from "react-icons/io";

function Bookmarks() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button"><IoCloseSharp></IoCloseSharp></span>
        <h2 className="bookmarks-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
          <div className="bookmark-item">
            <Image src="/images/demo.jpg" alt="bookmark image" width={4900} height={200}></Image>
            <h3>Lorem ipsum dolor sit.</h3>
            <span className="delete-button"><IoMdCloseCircleOutline></IoMdCloseCircleOutline></span>
          </div>

          <div className="bookmark-item">
            <Image src="/images/demo.jpg" alt="bookmark image" width={4900} height={200}></Image>
            <h3>Lorem ipsum dolor sit.</h3>
            <span className="delete-button"><IoMdCloseCircleOutline></IoMdCloseCircleOutline></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks
