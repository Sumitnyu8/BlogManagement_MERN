import React from "react";
import AddBlog from "./pages/AddBlog";
import AllBlogs from "./pages/AllBlogs";
import EditBlog from "./pages/EditBlog";
import SingleBlog from "./pages/SingleBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />

            <Route path="/allblogs" element={<AllBlogs/>} />

            <Route path="/add" element={<AddBlog />} />

            <Route path="/edit/:id" element={<EditBlog />} />

            <Route path="/blog/:id" element={<SingleBlog />} />

            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
