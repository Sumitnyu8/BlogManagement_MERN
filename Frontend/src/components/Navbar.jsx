import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const name = sessionStorage.getItem('userName');
  const email = sessionStorage.getItem('userEmail');
  return (
    <div className="Navbar">
        <div className="profile">{"hii! "+name}</div>
        <ul className='navLists'>
            <li className="lists">
              <Link to='/allblogs'>
                All Blogs
              </Link>
              </li>
            <li className="lists">
              <Link to={`/user/${email}`}>
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