import React, { useEffect, useState } from "react";
import "./AddBlogForm.css";
import Navbar from "../components/Navbar";
import { useParams,useNavigate  } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    image: "",
  });

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:5000/blog/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      
      setFormData({
        title: data.title,
        author: data.author,
        category: data.category,
        content: data.content,
        image: data.image,
      });
    } catch (err) {
      console.error("err Fetching Blogs", err);
    }
  };

  useEffect(() => {
    fetchBlog();
  },[id]);

  const handleChange = (e)=>{
    const {name , value } = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`http://localhost:5000/blog/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      if(!response.ok){
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }else{
        navigate('/allblogs');
      }
    }catch(err){
      console.error('Error Updating Blog',err);
    }
  };
  
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1 className="text-center">Edit Blogs</h1>
        </div>
        <div>
          <label htmlFor="title" className="labelName">
            Title:
          </label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="content" className="labelName">
            Content:
          </label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="category" className="labelName">
            Category:
          </label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="author" className="labelName">
            Author:
          </label>
          <input type="text" id="author" name="author" value={formData.author} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="image" className="labelName">
            Image:
          </label>
          <input type="text" id="image" name="image" className="image" value={formData.image} onChange={handleChange}/>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default EditBlog;
