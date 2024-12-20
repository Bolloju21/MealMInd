import React, { useState } from 'react'; // Import useState
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';


// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #e3c7a2;
  color:rgb(161, 145, 121);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  width: 100%;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #442902;
    color: #fff;
    border-color: #442902;
    transform: scale(1.05);
  }
`;

const HamburgerIcon = styled.div`
  display: flex;
  
  flex-direction: column;
  justify-content: space-between;
  padding:30px;
  width: 30px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(45deg); /* Rotation effect on hover */
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #442902;
  border-radius: 2px;
  transition: transform 0.3s ease, background-color 0.3s ease;
`;

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: #442902;
  color: white;
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

const SidebarItem = styled.div`
  margin: 15px 0;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: #ddd;
  }
`;

const HeaderTitle = styled.h1`
  color: #442902;
  font-size: 2rem;
  margin-top: 50px;
`;

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false); // Add missing useState
  const navigate = useNavigate(); // Add missing useNavigate
 
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/logout'); // Redirect to the Logout page
  };

  return (
    <div>
     

      {/* Main Header Section */}
      <HeaderWrapper>
        <Logo>
          <LogoImage
            src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
            alt="Logo"
          />
          <h1>Meal Mind</h1>
        </Logo>
        <NavTitle>Fuel your body, feed your mind</NavTitle>

      {/* Navigation Links */}
      <Nav>
        <NavLinks>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Fooditem">Food</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Dashboard">Dashboard</NavLinkStyled>
          </li>
        </NavLinks>
      </Nav>


      {/* Hamburger Icon and Sidebar */}
      <HamburgerIcon onClick={toggleSidebar}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerIcon>
    
      <Sidebar show={showSidebar}>
        <SidebarItem onClick={() => navigate('/profile')}>Profile</SidebarItem>
        <SidebarItem onClick={handleLogout}>Logout</SidebarItem>
      </Sidebar>
      </HeaderWrapper>
    </div>
  );
};

export default Header;