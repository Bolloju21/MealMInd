// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   // Initial user data
//   const initialUser = {
//     name: 'Sathvika',
//     role: 'Student',
//     email: 'sathvikavijju@gmail.com',
//     phone: '9826345722',
//     profilePicture: 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
//     canteenName: 'Canteen',
//   };

//   const [user, setUser] = useState(initialUser);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle input changes for updating user data
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Save changes to user data
//   const handleSave = () => {
//     setUser(formData);
//     setIsEditMode(false);
//   };

//   // Delete user profile and navigate to home
//   const handleDelete = () => {
//     setUser(null); // Clear user data
//     navigate('/'); // Redirect to Home page
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditMode(!isEditMode);
//     setFormData(user); // Reset form data to current user state
//   };

//   // Logout the user and navigate to login page
//   const handleLogout = () => {
//     setUser(null); // Clear user data
//     navigate('/Login'); // Redirect to Login page
//   };

//   // Redirect to appropriate page if user is null
//   if (!user) {
//     if (location.pathname !== '/Login') {
//       navigate('/'); // Redirect to Home page
//     }
//     return null; // Prevent further rendering
//   }

//   return (
//     <ProfileContainer>
//       <ProfileHeader>
//         <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
//       </ProfileHeader>

//       <ProfileDetails>
//         <ProfilePicture>
//           <img src={user.profilePicture} alt="Profile" />
//         </ProfilePicture>

//         <ProfileInfo>
//           {isEditMode ? (
//             <ProfileEdit>
//               <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
//               <label>Role: <input type="text" name="role" value={formData.role} onChange={handleInputChange} /></label>
//               <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
//               <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></label>
//               <label>Canteen Name: <input type="text" name="canteenName" value={formData.canteenName} onChange={handleInputChange} /></label>
//               <SaveButton onClick={handleSave}>Save</SaveButton>
//             </ProfileEdit>
//           ) : (
//             <>
//               <h2>{user.name}</h2>
//               <p><strong>Role:</strong> {user.role}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone}</p>
//               <p><strong>Canteen Name:</strong> {user.canteenName}</p>

//               <ProfileActions>
//                 <ActionButton onClick={toggleEditMode}>Edit</ActionButton>
//                 <ActionButton onClick={handleDelete}>Delete</ActionButton>
//                 <ActionButton onClick={handleLogout}>Logout</ActionButton>
//               </ProfileActions>
//             </>
//           )}
//         </ProfileInfo>
//       </ProfileDetails>
//     </ProfileContainer>
//   );
// };

// // Styled Components
// const ProfileContainer = styled.div`
//   width: 100%;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background-color: rgb(255, 255, 255);
// `;

// const ProfileHeader = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   h1 {
//     color: #442902;
//   }
// `;

// const ProfileDetails = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 20px;
// `;

// const ProfilePicture = styled.div`
//   img {
//     border-radius: 50%;
//     width: 150px;
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// const ProfileInfo = styled.div`
//   max-width: 400px;
//   h2 {
//     font-size: 24px;
//     color: #442902;
//   }
//   p {
//     font-size: 16px;
//   }
// `;

// const ProfileActions = styled.div`
//   margin-top: 20px;
// `;

// const ActionButton = styled.button`
//   margin: 5px;
//   padding: 8px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #3b240f;
//   }
// `;

// const SaveButton = styled.button`
//   padding: 10px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
// `;

// const ProfileEdit = styled.div`
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

// export default Profile;

// import React from 'react';
// import { useAuth } from '../Context/Authcontext';

// const Profile = () => {
//   const { userEmail } = useAuth();

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p>Email: {userEmail}</p>
//     </div>
//   );
// };

// export default Profile;








// import React, { useState } from 'react';
// import { useAuth } from '../Context/Authcontext';

// const Profile = () => {
//   const { userEmail } = useAuth();

//   // Initial user details
//   const initialUserDetails = {
//     name: '',
//     address: '',
//     contactNumber: '',
//     dateOfBirth: '',
//   };

//   const [userDetails, setUserDetails] = useState(initialUserDetails);
//   const [isEditing, setIsEditing] = useState(false);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   // Save changes
//   const handleSave = () => {
//     setIsEditing(false);
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p><strong>Email:</strong> {userEmail}</p>

//       {isEditing ? (
//         <form 
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '20px',
//             width: '300px',
//             margin: 'auto',
//           }}
//         >
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//             <textarea
//               name="address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px', height: '60px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Contact Number:</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={userDetails.contactNumber}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={userDetails.dateOfBirth}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 20px',
//                 backgroundColor: '#007BFF',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={toggleEditMode}
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
//           <p><strong>Name:</strong> {userDetails.name || 'Not Provided'}</p>
//           <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
//           <p><strong>Contact Number:</strong> {userDetails.contactNumber || 'Not Provided'}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth || 'Not Provided'}</p>
//           <button
//             onClick={toggleEditMode}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#007BFF',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;











// import React, { useState } from 'react';
// import { useAuth } from '../Context/Authcontext';

// const Profile = () => {
//   const { userEmail } = useAuth();

//   // Initial user details
//   const initialUserDetails = {
//     name: '',
//     address: '',
//     contactNumber: '',
//     dateOfBirth: '',
//   };

//   const [userDetails, setUserDetails] = useState(initialUserDetails);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState(''); // State to display messages

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//     setMessage(''); // Clear message when entering edit mode
//   };

//   // Save changes
//   const handleSave = () => {
//     setIsEditing(false);
//     setMessage('Profile updated successfully!');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p><strong>Email:</strong> {userEmail}</p>

//       {isEditing ? (
//         <form
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '20px',
//             width: '300px',
//             margin: 'auto',
//           }}
//         >
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//             <textarea
//               name="address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px', height: '60px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Contact Number:</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={userDetails.contactNumber}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={userDetails.dateOfBirth}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 20px',
//                 backgroundColor: '#007BFF',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={toggleEditMode}
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
//           <p><strong>Name:</strong> {userDetails.name || 'Not Provided'}</p>
//           <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
//           <p><strong>Contact Number:</strong> {userDetails.contactNumber || 'Not Provided'}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth || 'Not Provided'}</p>
//           <button
//             onClick={toggleEditMode}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#007BFF',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Edit Profile
//           </button>
//         </div>
//       )}

//       {/* Display the message below the form */}
//       {message && (
//         <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Profile;










// import React, { useState } from 'react';
// import { useAuth } from '../Context/Authcontext';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const { userEmail } = useAuth();
//   const navigate = useNavigate();

//   // Initial user details
//   const initialUserDetails = {
//     name: '',
//     address: '',
//     contactNumber: '',
//     dateOfBirth: '',
//   };

//   const [userDetails, setUserDetails] = useState(initialUserDetails);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState(''); // State to display messages

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//     setMessage(''); // Clear message when entering edit mode
//   };

//   // Save changes
//   const handleSave = () => {
//     setIsEditing(false);
//     setMessage('Profile updated successfully!');
//   };

//   // Logout and navigate to the home page
//   const handleLogout = () => {
//     // Perform any logout-related logic (e.g., clearing session)
//     navigate('/'); // Navigate to the home page
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p><strong>Email:</strong> {userEmail}</p>

//       {isEditing ? (
//         <form
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '20px',
//             width: '300px',
//             margin: 'auto',
//           }}
//         >
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//             <textarea
//               name="address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px', height: '60px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Contact Number:</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={userDetails.contactNumber}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={userDetails.dateOfBirth}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 20px',
//                 backgroundColor: '#007BFF',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={toggleEditMode}
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
//           <p><strong>Name:</strong> {userDetails.name || 'Not Provided'}</p>
//           <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
//           <p><strong>Contact Number:</strong> {userDetails.contactNumber || 'Not Provided'}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth || 'Not Provided'}</p>
//           <button
//             onClick={toggleEditMode}
//             style={{
//               marginRight: '10px',
//               padding: '10px 20px',
//               backgroundColor: '#007BFF',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Edit Profile
//           </button>
//           <button
//             onClick={handleLogout}
//             style={{
//               marginTop: '20px',
//               padding: '10px 20px',
//               backgroundColor: '#dc3545',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}

//       {/* Display the message below the form */}
//       {message && (
//         <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Profile;










// import React, { useState } from 'react';
// import { useAuth } from '../Context/Authcontext';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const { userEmail } = useAuth();
//   const navigate = useNavigate();

//   // Initial user details
//   const initialUserDetails = {
//     name: '',
//     address: '',
//     contactNumber: '',
//     dateOfBirth: '',
//     profilePicture: 'default', // Default profile picture
//   };

//   const [userDetails, setUserDetails] = useState(initialUserDetails);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState(''); // State to display messages

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   // Handle profile picture change
//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUserDetails({ ...userDetails, profilePicture: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//     setMessage(''); // Clear message when entering edit mode
//   };

//   // Save changes
//   const handleSave = () => {
//     setIsEditing(false);
//     setMessage('Profile updated successfully!');
//   };

//   // Logout and navigate to the home page
//   const handleLogout = () => {
//     navigate('/'); // Navigate to the home page
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p><strong>Email:</strong> {userEmail}</p>

//       <div>
//         <img
//           src={
//             userDetails.profilePicture === 'default'
//               ? 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' // Default picture
//               : userDetails.profilePicture
//           }
//           alt="Profile"
//           style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//         />
//       </div>

//       {isEditing ? (
//         <form
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '20px',
//             width: '300px',
//             margin: 'auto',
//           }}
//         >
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//             <textarea
//               name="address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px', height: '60px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Contact Number:</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={userDetails.contactNumber}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={userDetails.dateOfBirth}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Profile Picture:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfilePictureChange}
//               style={{ width: '100%' }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 20px',
//                 backgroundColor: '#007BFF',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={toggleEditMode}
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
//           <p><strong>Name:</strong> {userDetails.name || 'Not Provided'}</p>
//           <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
//           <p><strong>Contact Number:</strong> {userDetails.contactNumber || 'Not Provided'}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth || 'Not Provided'}</p>
//           <button
//             onClick={toggleEditMode}
//             style={{
//               marginRight: '10px',
//               padding: '10px 20px',
//               backgroundColor: 'rgb(215, 198, 39)',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Edit Profile
//           </button>
//           <button
//             onClick={handleLogout}
//             style={{
              
//               marginRight: '10px',
//               padding: '10px 20px',
              
//               backgroundColor: 'rgb(225, 104, 17)',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Delete
//           </button>

          
        
//         </div>
//       )}

//       {/* Display the message below the form */}
//       {message && (
//         <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Profile;










// import React, { useState } from 'react';
// import { useAuth } from '../Context/Authcontext';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const { userEmail } = useAuth();
//   const navigate = useNavigate();

//   // Initial user details
//   const initialUserDetails = {
//     name: '',
//     address: '',
//     contactNumber: '',
//     dateOfBirth: '',
//     profilePicture: 'default', // Default profile picture
//   };

//   const [userDetails, setUserDetails] = useState(initialUserDetails);
//   const [isEditing, setIsEditing] = useState(false);
//   const [message, setMessage] = useState(''); // State to display messages

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({ ...userDetails, [name]: value });
//   };

//   // Handle profile picture change
//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setUserDetails({ ...userDetails, profilePicture: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//     setMessage(''); // Clear message when entering edit mode
//   };

//   // Save changes
//   // const handleSave = () => {
//   //   setIsEditing(false);
//   //   setMessage('Profile updated successfully!');
//   // };
// // Save changes
// const handleSave = async () => {
//   try {
//     const response = await fetch('http://localhost:3005/profile', {
//       method: 'POST', // POST to add new data
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userDetails),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to save profile');
//     }

//     const data = await response.json();
//     console.log('Saved profile:', data);

//     // Update the UI
//     setIsEditing(false);
//     setMessage('Profile updated successfully!');
//   } catch (error) {
//     console.error('Error saving profile:', error);
//     setMessage('Failed to update profile. Please try again.');
//   }
// };

//   // Logout and navigate to the home page
//   const handleLogout = () => {
//     navigate('/'); // Navigate to the home page
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Welcome to Your Profile</h1>
//       <p><strong>Email:</strong> {userEmail}</p>

//       <div>
//         <img
//           src={
//             userDetails.profilePicture === 'default'
//               ? 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' // Default picture
//               : userDetails.profilePicture
//           }
//           alt="Profile"
//           style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//         />
//       </div>

//       {isEditing ? (
//         <form
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '20px',
//             width: '300px',
//             margin: 'auto',
//           }}
//         >
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
//             <textarea
//               name="address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px', height: '60px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Contact Number:</label>
//             <input
//               type="tel"
//               name="contactNumber"
//               value={userDetails.contactNumber}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Date of Birth:</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={userDetails.dateOfBirth}
//               onChange={handleInputChange}
//               style={{ width: '100%', padding: '8px' }}
//             />
//           </div>
//           <div style={{ marginBottom: '15px', width: '100%' }}>
//             <label style={{ display: 'block', marginBottom: '5px' }}>Profile Picture:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfilePictureChange}
//               style={{ width: '100%' }}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button
//               type="button"
//               onClick={handleSave}
//               style={{
//                 marginRight: '10px',
//                 padding: '10px 20px',
//                 backgroundColor: '#007BFF',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={toggleEditMode}
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div style={{ marginTop: '20px', textAlign: 'left', display: 'inline-block' }}>
//           <p><strong>Name:</strong> {userDetails.name || 'Not Provided'}</p>
//           <p><strong>Address:</strong> {userDetails.address || 'Not Provided'}</p>
//           <p><strong>Contact Number:</strong> {userDetails.contactNumber || 'Not Provided'}</p>
//           <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth || 'Not Provided'}</p>
//           <button
//             onClick={toggleEditMode}
//             style={{
//               marginRight: '10px',
//               padding: '10px 20px',
//               backgroundColor: 'rgb(215, 198, 39)',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Edit Profile
//           </button>
//           <button
//             onClick={handleLogout}
//             style={{
              
//               marginRight: '10px',
//               padding: '10px 20px',
              
//               backgroundColor: 'rgb(225, 104, 17)',
//               color: 'white',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Delete
//           </button>

          
        
//         </div>
//       )}

//       {/* Display the message below the form */}
//       {message && (
//         <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
//           {message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Profile;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  
  const mockUserData = {
    name: '',
    role: '',
    email: '',
    phone: '',
    profilePicture:
      'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    canteenName: '',
  };

  const [user, setUser] = useState(mockUserData);
  const [isEditMode, setIsEditMode] = useState(false); 
  const [formData, setFormData] = useState(mockUserData); 
  const [previewImage, setPreviewImage] = useState(mockUserData.profilePicture); 
  const [userId, setUserId] = useState(null); 
  const navigate = useNavigate();


  const jsonServerUrl = '  http://localhost:3000/Users'; 


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(jsonServerUrl);
        if (response.data && response.data.length > 0) {
          const user = response.data[0]; 
          setUser(user);
          setFormData(user);
          setPreviewImage(user.profilePicture);
          setUserId(user.id); 
        }
      } catch (error) {
        console.error('Error fetching user data from JSON server:', error);
      }
    };

    fetchUserData();
  }, []);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSave = async () => {
    if (!userId) return; 
    try {
      const updatedUser = { ...formData, profilePicture: previewImage };
      await axios.put(`${jsonServerUrl}/${userId}`, updatedUser); 
      setUser(updatedUser); 
      setIsEditMode(false);
    } catch (error) {
      console.error('Error updating user data on JSON server:', error);
    }
  };


  const handleDelete = async () => {
    if (!userId) return; 
    try {
      await axios.delete(`${jsonServerUrl}/${userId}`); 
      setUser(null); 
      navigate('/login'); 
    } catch (error) {
      console.error('Error deleting user on JSON server:', error);
    }
  };


  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setFormData(user); 
    setPreviewImage(user.profilePicture); 
  };


  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profile Deleted</h1>
        </div>
        <p>No profile data found. Please log in again.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <style>
        {`
        .profile-container {
          width: 100%;
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #fff;
        }

        .profile-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .profile-header h1 {
          color: #442902;
        }

        .profile-details {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 20px;
        }

        .profile-picture img {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          object-fit: cover;
        }

        .profile-picture label {
          display: block;
          margin-top: 10px;
          font-size: 14px;
        }

        .profile-picture input {
          margin-top: 5px;
        }

        .profile-info {
          max-width: 400px;
        }

        .profile-info h2 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          color: #442902;
        }

        .profile-info p {
          margin: 8px 0;
          font-size: 16px;
        }

        .profile-info strong {
          font-weight: bold;
        }

        .profile-actions {
          margin-top: 20px;
        }

        .action-button {
          margin: 5px;
          padding: 8px 15px;
          background-color: #442902;
          color: white;
          border: none;
          cursor: pointer;
        }

        .action-button:hover {
          background-color: #3b240f;
        }

        .profile-edit label {
          display: block;
          margin: 10px 0 5px;
        }

        .profile-edit input {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .save-button {
          padding: 10px 15px;
          background-color: #28a745;
          color: white;
          border: none;
          cursor: pointer;
        }

        .save-button:hover {
          background-color: #218838;
        }
        `}
      </style>
      <div className="profile-header">
        <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
      </div>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={isEditMode ? previewImage : user.profilePicture} alt="Profile" />
          {isEditMode && (
            <label>
              Upload New Picture:
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
          )}
        </div>
        <div className="profile-info">
          {isEditMode ? (
            <div className="profile-edit">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Role:
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Canteen Name:
                <input
                  type="text"
                  name="canteenName"
                  value={formData.canteenName}
                  onChange={handleInputChange}
                />
              </label>
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Canteen Name:</strong> {user.canteenName}
              </p>
              <div className="profile-actions">
                <button className="action-button" onClick={toggleEditMode}>
                  Edit
                </button>
                <button className="action-button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;