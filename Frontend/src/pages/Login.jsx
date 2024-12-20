import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [user,setUser] = useState({
    email:"",
    password:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem('userEmail', user.email); // Store email
        sessionStorage.setItem('userName', data.userName); // Store userName
        console.log(sessionStorage.getItem('userEmail')); // Debugging to check email
        navigate('/allblogs'); // Navigate to blogs
      }
    } catch (err) {
      console.error('Invalid Credentials', err);
    }
  };
  

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign-In</h1>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            placeholder="Enter your password"
            required
            onChange={handleChange}
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