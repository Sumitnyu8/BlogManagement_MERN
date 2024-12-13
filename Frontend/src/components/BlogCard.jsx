import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ title, author, category, content, image, id, onDelete }) => {
  const handleDelete = async () => {
    if(window.confirm("Are you sure want to delete this blog?")){
      try {
        const response = await fetch(`http://localhost:5000/blog/${id}`,{
          method: "DELETE",
        });
        if(response.ok){
          alert("Blog deleted successfully!");
          onDelete(id);
        }else {
          alert("Failed to delete blog. Please try again.");
        };
      } catch (err) {
        console.error('Error Deleting Blog',err);
      }
    }
    }
  return (
    <>
      <div className="blog-card">
        <h2>{title}</h2>
        <p className="author">By: {author}</p>
        <p className="category">Category: {category}</p>
        <p className="content">{content}...</p>
        <img src={image} alt={title} />
        <div className="card_btn">
          <Link to={`/edit/${id}`} className="edit-btn">
            Edit
          </Link>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
