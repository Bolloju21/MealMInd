import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/Users";


// Full page container with a modern background design
export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e3c7a2, #ffffff);
  background-image: url("https://www.kerry.com/content/dam/kerry/en/images/insights/kerrydigest/2023/halal-GettyImages-1175505781.jpg");
  background-size: cover;
  background-position: center;
`;

// Login card container with a subtle shadow and modern feel
export const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

// Heading with a bold and clean style
export const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

// Form group to space input fields evenly
export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

// Inputs with a modern, minimalistic style
export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #e3c7a2;
    outline: none;
  }
`;

// Error messages with a noticeable but non-intrusive style
export const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 13px;
  margin: 0;
`;

// Submit button with hover effects and modern styling
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #442902;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e3c7a2;
    color: #333;
  }

  &:focus {
    outline: none;
  }
`;

// Success message with subtle green tones
export const SuccessMessage = styled.p`
  color: #5cb85c;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
`;

// Additional styling for the footer text or optional elements
export const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;


const Log = () => {
  const navigate = useNavigate();

  // State Initialization
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

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

  // Add a new user
  const addUser = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!newUsers.name) errors.name = "Name is required.";
    if (!newUsers.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(newUsers.email)) {
      errors.email = "Enter a valid email.";
    } else if (users.some((user) => user.email === newUsers.email)) {
      errors.email = "Email already exists. Please use a different email.";
    }

    if (!newUsers.password) {
      errors.password = "Password is required.";
    } else if (newUsers.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        newUsers.password
      )
    ) {
      errors.password =
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    setValidationErrors(errors);

    // If there are validation errors, don't proceed
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(API_URL, newUsers);
      setUsers([...users, response.data]);
      setNewUsers({ name: "", email: "", password: "" });
      setValidationErrors({});
      setSuccessMessage("User successfully signed up!");

      // Redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 1000);

      console.log("User added", response.data);
    } catch (error) {
      console.error("Error in adding user", error);
      setSuccessMessage(""); // Clear success message in case of an error
    }
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <Heading>Sign Up</Heading>

        <form onSubmit={addUser}>
          <FormGroup>
            <Input
              type="text"
              value={newUsers.name}
              placeholder="Name"
              onChange={(e) =>
                setNewUsers({ ...newUsers, name: e.target.value })
              }
            />
            {validationErrors.name && (
              <ErrorMessage>{validationErrors.name}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              value={newUsers.email}
              placeholder="Enter your Email"
              onChange={(e) =>
                setNewUsers({ ...newUsers, email: e.target.value })
              }
            />
            {validationErrors.email && (
              <ErrorMessage>{validationErrors.email}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Input
              type={showPassword ? "text" : "password"} // Toggle input type based on `showPassword`
              value={newUsers.password}
              placeholder="Enter your password"
              onChange={(e) =>
                setNewUsers({ ...newUsers, password: e.target.value })
              }
            />
            {validationErrors.password && (
              <ErrorMessage>{validationErrors.password}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
              />{" "}
              Show Password
            </label>
          </FormGroup>

          <SubmitButton type="submit">Sign-up</SubmitButton>

          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </form>
      </LoginContainer>
    </LoginPageContainer>
  );
};
export default Log;