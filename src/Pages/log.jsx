import React, { useState, useEffect } from "react";
import axios from "axios";
import SignUpForm from './Signup';
import LoginForm from './login';

const Log = () => {
  const API_URL = "http://localhost:3001/Users";
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false); // Toggle between forms

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error in fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  return (
    <div className="login-page-container" id="loginPageContainer">
      <div className="login-container">
        <h2 className="head">{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Toggle between Sign Up and Login form */}
        {!isLogin ? (
          <SignUpForm setIsLogin={setIsLogin} users={users} />
        ) : (
          <LoginForm setIsLogin={setIsLogin} users={users} />
        )}
      </div>
    </div>
  );
};

export default Log;
