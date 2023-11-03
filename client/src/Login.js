import React, { useState } from 'react';
//import './Login.css';

function LoginPage() {
  const [usernames, setUsername] = useState('');
  const [passwords, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would typically send a request to your server
    // to validate the user's credentials. For this example, we'll just check if
    // the username and password match a predefined value.

    if (usernames === 'JohnDoe' && passwords === 'Password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {usernames}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <input
            type="text"
            placeholder="Username"
            value={usernames}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="passwords"
            placeholder="Password"
            value={passwords}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;