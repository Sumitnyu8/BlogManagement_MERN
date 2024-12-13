import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
        <div className="profile">Profile</div>
        <ul className='navLists'>
            <li className="lists">
              <Link to='/allblogs'>
                All Blogs
              </Link>
              </li>
            <li className="lists">
              <Link to="/blog/:id">
                Your Blogs
              </Link>
            </li>
            <li className="lists">
              <Link to="/add">
                Add Blogs
              </Link>
            </li>
            <li className="lists">
              <Link to="/about">
                About
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar