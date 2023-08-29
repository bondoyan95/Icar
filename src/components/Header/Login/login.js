import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberPasswordChange = (e) => {
    setRememberPassword(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Perform login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Password:', rememberPassword);
      // Reset the form
      setEmail('');
      setPassword('');
      setRememberPassword(false);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="rememberPassword"
            checked={rememberPassword}
            onChange={handleRememberPasswordChange}
          />
          <label htmlFor="rememberPassword">Remember Password</label>
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
