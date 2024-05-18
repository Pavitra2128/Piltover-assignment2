import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    setIsLoggedIn(true);  
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [isLoggedIn]);

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div>
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
        </div>
      ) : (
        <div>
          <h1>User Details</h1>
          <div className="user-cards">
            {userData.map(user => (
              <div key={user.id} className="user-card">
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <style jsx>{`
        .login-container {
          width: 300px;
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
          width: calc(100% - 20px);
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: calc(100% - 20px);
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
        .user-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .user-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 1rem;
          width: 100%;
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
};

export default Login;
