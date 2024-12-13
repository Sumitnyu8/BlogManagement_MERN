import React, {useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    cnf_password:""
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
    if(user.password !== user.cnf_password){
      alert("Password and Confirm Password should be same");
    }
    try{
      const response = await fetch('http://localhost:5000/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      });
      if(response.ok){
        navigate('/');
      }else{
        alert('Registration failed');
      }
    }catch(err){
      console.error('Invalid Credentials',err);
    }
  }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name='name'
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="cnfpassword">Confirm Password</label>
          <input
            type="password"
            id="cnfpassword"
            name='cnf_password'
            placeholder="Enter your confirm password"
            required
            onChange={handleChange}
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