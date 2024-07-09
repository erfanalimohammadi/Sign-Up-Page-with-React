# Registration Form with React

This project is a simple registration form implemented using React and its hooks. The project also utilizes the `styled-components` library for styling the components.
In this project there is a simple sign up form which when user enters her/his information in inputs after sunmiting a table creatred in the blow of the form which includes the entered information and shows those to the user.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system. To install Node.js and npm, visit [this link](https://nodejs.org/).

## Installation Steps

1. Create a new project using Create React App:

    ```bash
    npx create-react-app my-app
    cd my-app
    ```

2. Install `styled-components`:

    ```bash
    npm install styled-components
    ```

3. Replace the content of `src/index.js` with the following:

    ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        import reportWebVitals from './reportWebVitals';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
        <App />
        </React.StrictMode>
        );
    ```

4. Create a new file `src/App.js` with the following content:

    ```jsx
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
    ```

5. Create a new file `src/index.css` with the following content:

    ```jsx
        @import url("https://fonts.googleapis.com/css2?family=poppins:wght@300;400;500;600;700;800;900&display=swap");

        * {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: "poppins", sans-serif;
    }

    body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url("./2693171.jpg");
    backdrop-filter: blur(1px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }

    .nav {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
         top: 0;
         left: 0;
      right: 0;
      width: 100vw;
      backdrop-filter: blur(20px);
      padding: 15px;
     z-index: 1;
     box-shadow: 0 0 10px rgb(126, 115, 115);
      background-color: transparent;
     border: 2px solid rgba(0, 0, 0, 0.1);
    }

    .nav a {
      display: flex;
     height: 100%;
     justify-content: space-around;
     color: #fff;
     text-decoration: none;
     margin: 0 45px;
     font-size: 20px;
     }

    .nav a:hover {
    background-color: transparent;
    color: #333;
    transition: all 0.005s ease-in-out 0.005s;
    }

    .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    }

    .wrapper {
    width: 420px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
    display: grid;
    justify-self: center;
    margin-top: 80px;
    }

    .wrapper h1 {
    font-size: 36px;
    text-align: center;
    }

    .wrapper .input-box {
    width: 100%;
    height: 50px;
    background: transparent;
    margin: 15px 0;
    }

    .header {
    margin-bottom: 50px;
    }

    .input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
    }

    .input-box input:focus {
    outline: 2px solid #fff;
    transition: all 50ms ease-in 10ms;
    }

    .input-box input::placeholder {
    color: #fff;
    }

    .wrapper .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    color: #333;
    font-weight: 600;
    }

    .wrapper .btn:hover {
    background-color: transparent;
    color: #fff;
    transition: all 0.2s ease-out 50ms;
    }

    .table-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    }

    .table {
    border: 1px solid white;
    width: 90%;
    backdrop-filter: blur(20px);
    padding: 1px;
    box-shadow: 0 0 10px rgb(126, 115, 115);
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    }

    td,
    th,
    tr {
    padding: 5px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: rgb(255, 255, 255);
    
    ```

6. Start the project:

    ```bash
    npm start
    ```

This will open your React project in the default web browser, allowing you to interact with the registration form.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.


## Key Points

- **React**: Used for structuring and managing the state of the application.
- **Hooks**: `useState` is used for managing form input states.
- **CSS-in-JS**: `styled-components` is used for styling the form, buttons, and table.
- **Reusable Components**: Components are designed to be reusable and modular.

## Built With

React
CSS-in-JS

## Author

Created by [Erfan Alimohammadi](https://github.com/erfanalimohammadi). You can reach me at erfanalimohammadi@outlook.com.


This `README.md` file provides an overview of the project, instructions for setting it up, a brief explanation of each file, and the necessary CSS and React code to ensure the project works as intended.






