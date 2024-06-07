import React from 'react';
import { Link } from 'react-router-dom';
import './regi.css';

const Register = () => {
  return (
    <div className="container">
      <form className="register-form">
        <h2>Register</h2>
        <p>Kindly fill in this form to register.</p>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required />
        <button type="submit">Register</button>
        
        <center><Link to='/'>Login</Link></center> {/* Corrected path to Login */}
      </form>
    </div>
  );
}

export default Register;
