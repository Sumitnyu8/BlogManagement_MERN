import React, { useState } from "react";
import "./AddBlogForm.css";
import Navbar from "../components/Navbar";

function AddBlog() {
  const userEmail = sessionStorage.getItem('userEmail') || '';
  const [addFormData, setAddFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    image: "",
    email: userEmail
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/blog/addblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addFormData),
      });

      if (response.ok) {
        console.log(addFormData);
        
        alert("Blog Added Successfully");
        setAddFormData({
          title: "",
          author: "",
          category: "",
          content: "",
          image: "",
          email: ""
        });
      }
    } catch (err) {
      console.error("Error Adding Blog", err);
    }
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1 className="text-center">Add Blogs</h1>
        </div>
        <div>
          <label htmlFor="title" className="labelName">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={addFormData.title}
          />
        </div>

        <div>
          <label htmlFor="content" className="labelName">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            onChange={handleChange}
            value={addFormData.content}
          />
        </div>

        <div>
          <label htmlFor="category" className="labelName">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={addFormData.category}
          />
        </div>

        <div>
          <label htmlFor="author" className="labelName">
            Author:
          </label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            value={addFormData.author}
          />
        </div>

        <div>
          <label htmlFor="image" className="labelName">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="image"
            onChange={handleChange}
            value={addFormData.image}
          />
        </div>

        <button type="submit" className="btn">
          Add Blog
        </button>
      </form>
    </>
  );
}

export default AddBlog;
