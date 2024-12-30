import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image';

function NewsModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
            <IoCloseSharp></IoCloseSharp>
        </span>
        <Image src="/images/blog1.jpg" alt="modal" width={400} height={200}></Image>
        <h2 className="modal-title">Lorem ipsum dolor, sit amet 
        consectetur adipisicing elit. Soluta, culpa.</h2>
        <p className="modal-source">Source: The Guardian</p>
        <p className="modal-date">June 24, 2024, 04:15 PM</p>
        <p className="modal-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Assumenda maiores eum quos ex facere aut est iure dicta 
        numquam, doloremque pariatur architecto voluptas sapiente dolorem nisi fugiat totam, vel veritatis!</p>
        <a href="#" className="read-more-link">Read More</a>
      </div>
    </div>
  )
}

export default NewsModal
