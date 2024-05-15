import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const usernameRegex = /^(?=.*[@#$%^&*])[a-zA-Z0-9@#$%^&*]{5,}$/;
    if (!usernameRegex.test(username)) {
      setError('Username must contain at least one special character (@, #, $, %, ^, &, *) and be at least 5 characters long.');
      return;
    }
    
    setError('');
    const userDetails = {
      username,
      password
    };
    console.log('Login successful. User details:', userDetails);
    // Redirect the user to the home page after successful login
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <style jsx>{`
        /* CSS styles */
        .login-container {
          width: 300px; /* Adjust width */
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input[type="text"],
        input[type="password"] {
          width: calc(100% - 20px); /* Adjust width */
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: calc(100% - 20px); /* Adjust width */
          padding: 0.5rem 1rem;
          background-color: #114f8b;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0e3e6f;
        }
      `}</style>
    </div>
  );
};

export default Login;
