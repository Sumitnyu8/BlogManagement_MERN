import React from "react";
import "./SingleBlog.css";
import Navbar from "../components/Navbar";

function SingleBlog() {
  return (
    <>
      <Navbar />
      <div className="blog-details">
        <h1>How to Learn React</h1>
        <p className="author">By: John Doe</p>
        <p className="category">Category: Programming</p>
        <img
          src="https://c.ndtvimg.com/2024-12/2eqfqgb8_mh60r-lockheed-martin_625x300_03_December_24.jpeg?downsize=773:435"
          alt="How to Learn React"
        />
        <p className="content">
          React is a popular library for building user interfaces...
        </p>
      </div>
    </>
  );
}

export default SingleBlog;
