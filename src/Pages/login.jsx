// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/Authcontext';


// let API_URL = "http://localhost:3001/Users";

// // Styled Components
// const LoginFormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f2f2f2;
//   background-image: url('https://familysearch.brightspotcdn.com/dims4/default/6f24918/2147483647/strip/true/crop/800x500+0+0/resize/2400x1500!/format/jpg/quality/90/?url=http:%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Ffood-of-the-middle-east.jpg');
//   background-size: cover;
//   background-position: center;
// `;

// const LogInContainer = styled.div`
//   background: white;
//   padding: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 370px;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   margin-bottom: 5px;
// `;

// const CheckboxLabel = styled.label`
//   font-size: 14px;
//   color: #555;
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// const Checkbox = styled.input`
//   margin-right: 10px;
// `;

// const ErrorMessage = styled.div`
//   color: #e74c3c;
//   font-size: 0.9rem;
//   margin-bottom: 1rem;
// `;

// const SuccessMessage = styled.div`
//   color: #2ecc71;
//   font-size: 0.9rem;
//   margin-bottom: 1rem;
// `;

// const SubmitButton = styled.button`
//   width: 390px;
//   padding: 12px;
//   background-color: #442902;
//   color: white;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:hover {
//     background-color: #e3c7a2;
//   }
// `;

// const Login = () => {
//   const { setIsLoggedIn } = useAuth()
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);

//     try {
//       const response = await axios.get(API_URL);
//       const users = response.data;

//       const user = users.find(
//         (user) => user.email === loginData.email && user.password === loginData.password
//       );

//       if (user) {
//         const updatedUser = {
//           ...user,
//           lastLogin: new Date().toISOString() // Store the last login time
//         };

//         await axios.put(`${API_URL}/${user.id}`, updatedUser);

//         setSuccess('Login successful!');
//         navigate("/Dashboard");
//         setError('');
//       } else {
//         setError('Invalid email or password');
//         setSuccess('');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('An error occurred. Please try again later.');
//       setSuccess('');
//     }
//   };

//   return (
//     <LoginFormContainer>
//       <LogInContainer>
//         <Title>Log In</Title>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your Email"
//               value={loginData.email}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <Input
//               type={showPassword ? "text" : "password"} // Toggle input type based on `showPassword`
//               id="password"
//               placeholder="Enter your password"
//               name="password"
//               value={loginData.password}
//               onChange={handleChange}
//               required
//             />
//           </FormGroup>

//           <FormGroup>
//             <CheckboxLabel>
//               <Checkbox
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
//               />
//               Show Password
//             </CheckboxLabel>
            
//           </FormGroup>

//           {error && <ErrorMessage>{error}</ErrorMessage>}
//           {success && <SuccessMessage>{success}</SuccessMessage>}

//           <SubmitButton type="submit">Log In</SubmitButton>
//         </Form>
//       </LogInContainer>
//     </LoginFormContainer>
//   );
// };

// export default Login;













import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

let API_URL = "http://localhost:3000/Users";

// Styled Components
const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  background-image: url('https://familysearch.brightspotcdn.com/dims4/default/6f24918/2147483647/strip/true/crop/800x500+0+0/resize/2400x1500!/format/jpg/quality/90/?url=http:%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Ffood-of-the-middle-east.jpg');
  background-size: cover;
  background-position: center;
`;

const LogInContainer = styled.div`
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
  width: 370px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  color: #2ecc71;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  width: 390px;
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

const Login = () => {
  const { setIsLoggedIn, setUserEmail } = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL);
      const users = response.data;

      const user = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );

      if (user) {
        const updatedUser = {
          ...user,
          lastLogin: new Date().toISOString()
        };

        await axios.put(`${API_URL}/${user.id}`, updatedUser);

        setIsLoggedIn(true);
        setUserEmail(user.email); // Save logged-in email to context
        setSuccess('Login successful!');
        setError('');
        navigate("/Dashboard"); // Redirect to profile page
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <LoginFormContainer>
      <LogInContainer>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
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

          <SubmitButton type="submit">Log In</SubmitButton>
        </Form>
      </LogInContainer>
    </LoginFormContainer>
  );
};

export default Login;
