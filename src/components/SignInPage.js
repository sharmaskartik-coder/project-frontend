import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import AuthService from '../service/MyMunicipalService'


const SignInPage = ({ onLogin }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (usernameOrEmail && password) {
      try {
        const response = await AuthService.signIn(usernameOrEmail, password);
        console.log(response);
        onLogin();
      } catch (error) {
        setErrorMessage(error.message || "Login failed");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div className="login-links">
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="oauth-buttons">
          <button className="oauth-button google">
            <FaGoogle className="icon" /> Google
          </button>
          <button className="oauth-button facebook">
            <FaFacebook className="icon" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;