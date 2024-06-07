import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'; // Import CSS file for styling

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if the entered username and password match the predefined values
    if (username === 'Nithish' && password === '1234') {
        <Link to='/Student'>Register</Link>
      console.log('Logging in with:', { username, password });
      // Clear input fields after login
      setUsername('');
      setPassword('');
      setError('');
    } else {
      // Display error message if login fails
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       
        <button type="submit"><Link to='/Student'>Login</Link></button>
        <center><Link to='/Login'>Register</Link></center> 
      </form>
    </div>
  );
};

export default Register;
