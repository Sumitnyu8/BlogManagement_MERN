import React from "react";
import "./AllBlogs.css";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const fetchApi = await fetch("http://localhost:5000/blog");
      const data = await fetchApi.json();
      setBlogs(data);
      setLoading(false);
    } catch (err) {
      console.error("err Fetching Blogs", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => id !== blog._id));
  };

  return (
    <>
      <Navbar />
      <div className="all-blogs">
        <h1>All Blogs</h1>
        <div className="blog-list">
          {loading ? (
            <p>Loading ...</p>
          ) : (
            blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                author={blog.author}
                category={blog.category}
                content={blog.content}
                image={blog.image}
                id={blog._id}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
