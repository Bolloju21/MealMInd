import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color:#e3c7a2;
  color: #442902;`
;

const Logo = styled.div`
  display: flex;
  align-items: center;`
;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;`
;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the NavTitle horizontally */
  justify-content: center; /* Ensures the content is centered vertically */
  height: 100%; /* Ensures that Nav takes up the full height available */
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  width: 100%; /* Ensures the title spans the full width for centering */
  `
;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;`
;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  padding: 10px 20px; /* Add padding to make the link appear like a button */
  border: 2px solid transparent; /* Default transparent border */
  border-radius: 5px; /* Rounded corners for the button */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
  display: inline-block; /* Make sure the link behaves like a block-level element */

  &:hover {
    background-color: #442902; /* Change background color on hover */
    color: #fff; /* Ensure the text remains white */
    border-color: #442902 /* Optional: border color matching the background */
    transform: scale(1.05); /* Slightly enlarge the link on hover */
  }
    `
;


const Header= () => {
  return (
    <HeaderWrapper>
      <Logo>
        <LogoImage
          src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          alt="Logo"
        />
        <h1>Meal Mind</h1>
      </Logo>
      <NavTitle>Fuel your body, feed your mind</NavTitle>
      <Nav>
       
        <NavLinks>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Signup">SignUp</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Adminsignup">Admin</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
          </li>

          
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;