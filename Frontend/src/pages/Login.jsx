import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signin-btn">
          Sign In
        </button>
        <p>Already Logged in click here to <Link to="/signup">SignUp</Link></p>
      </form>
    </div>
  )
}

export default Login