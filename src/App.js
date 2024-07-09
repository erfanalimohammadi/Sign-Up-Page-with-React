import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      userID: Math.floor(Math.random() * 9999),
      name,
      password,
      email,
    };
    setUsers([...users, newUser]);
    clearInputs();
  };

  const clearInputs = () => {
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="app-container">
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">About</a>
      </nav>
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="register-form">
          <h1 className="header">Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              className="username-input"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="password-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              className="email-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      {users.length > 0 && (
        <div className="table-container">
          <table className="table">
            <thead className="table-head">
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {users.map((user) => (
                <tr key={user.userID}>
                  <td>{user.userID}</td>
                  <td>{user.name}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;