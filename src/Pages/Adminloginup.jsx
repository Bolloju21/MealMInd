import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AdminLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  background-image: url('http://www.wicklowpartnership.ie/wp-content/uploads/2013/06/Healthy-Foods.jpeg');
  background-size: cover;
  background-position: center;
`;

const LoginBox = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 365px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const SuccessMessage = styled.div`
  color: #2ecc71;
  font-size: 0.9rem;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #442902;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e3c7a2;
  }
`;

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Hook to handle redirection

  const predefinedUsers = [
    { email: 'canteen@gmail.com', password: 'Canteen@123' },
    { email: 'mealmind@gmail.com', password: 'Mealmind@123' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = predefinedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSuccess('Login Successful');
      setError('');
      // Redirect to orders page after a successful login
      setTimeout(() => {
        navigate('/orders'); // Adjust the path as per your routing setup
      }, 1000); // Delay before redirecting to show success message
    } else {
      setError('Invalid email or password');
      setSuccess('');
    }
  };

  return (
    <AdminLoginContainer>
      <LoginBox>
        <Title>Admin Login</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </FormGroup>
          <FormGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </CheckboxLabel>
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
      </LoginBox>
    </AdminLoginContainer>
  );
}

export default AdminLogin;
