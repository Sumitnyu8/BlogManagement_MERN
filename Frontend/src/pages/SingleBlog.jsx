import React from "react";
import "./SingleBlog.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import BlogCard from "../components/BlogCard";

function SingleBlog() {
  const { email } = useParams();
  console.log(email);

  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const fetchApi = await fetch(`http://localhost:5000/blog/user/${email}`);
      const data = await fetchApi.json();
      console.log(data);
      setUserBlogs(data);
      setLoading(false);
    } catch (err) {
      console.error("err Fetching Blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [email]);

  const handleDelete = (id) => {
    setUserBlogs((prev) => prev.filter((blog) => blog._id !== id));
  };
  
  return (
    <>
      <Navbar />

      <div className="blog-list">
          {loading ? (
            <p>Loading ...</p>
          ) : (
            userBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                author={blog.author}
                category={blog.category}
                content={blog.content}
                image={blog.image}
                email={blog.email}
                id={blog._id}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

      {/* <div className="blog-details">
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
      </div> */}
    </>
  );
}

export default SingleBlog;
