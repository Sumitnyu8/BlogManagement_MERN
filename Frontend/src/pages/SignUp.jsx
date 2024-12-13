import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="cnfpassword">Confirm Password</label>
          <input
            type="password"
            id="cnfpassword"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp