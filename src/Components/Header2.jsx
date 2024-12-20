// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled components
// const HeaderWrapper = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #e3c7a2;
//   color: #442902;`
// ;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;`
// ;

// const LogoImage = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-right: 10px;`
// ;

// const Nav = styled.nav`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100%;`
// ;

// const NavTitle = styled.h1`
//   font-size: 1.5rem;
//   text-align: center;
//   margin-bottom: 1rem;
//   font-weight: 500;
//   width: 100%;`
// ;

// const HamburgerWrapper = styled.div`
//   position: relative;
//   `
// ;

// const HamburgerIcon = styled.div`
//   display: inline-block;
//   width: 40px;
//   height: 40px;
//   position: relative;
//   cursor: pointer;

//   &::before,
//   &::after,
//   span {
//     content: '';
//     position: absolute;
//     left: 0;
//     width: 100%;
//     height: 5px;
//     background-color: #442902;
//     border-radius: 5px;
//     transition: all 0.3s ease;
//   }

//   &::before {
//     top: 0;
//   }

//   span {
//     top: 50%;
//     transform: translateY(-50%);
//   }

//   &::after {
//     bottom: 0;
//   }

//   &:hover::before,
//   &:hover::after,
//   &:hover span {
//     background-color: #e3c7a2;
//   }
//     `
// ;
// const DropdownMenu = styled.ul`
//   position: fixed; /* Make the menu cover the entire screen */
  
//   right: 0;
//   width: 20%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
//   display: ${(props) => (props.isVisible ? 'flex' : 'none')}; /* Flexbox for centering the content */
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000; /* Ensure it overlays other elements */
//   padding: 0;
//   margin: 9px;
//   list-style: none;
//   `
// ;

// const DropdownItem = styled.li`
//   padding: 15px 30px;
//   background: #fff;
//   color: #442902;
//   font-size: 1.2rem;
//   margin: 10px 0;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.3s ease;

//   &:hover {
//     background-color: #e3c7a2;
//     transform: scale(1.05); /* Slight zoom-in effect */
//   }
//     `
// ;



// const Header2 = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(null);

//   const toggleDropdown = () => {
//     setIsDropdownVisible((prev) => !prev);
//   };

//   return (
//     <HeaderWrapper>
//       <Logo>
//         <LogoImage
//           src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
//           alt="Logo"
//         />
//         <h1>Meal Mind</h1>
//       </Logo>
//       <NavTitle>Fuel your body, feed your mind</NavTitle>
//       <Nav>
//         <HamburgerWrapper>
//           <HamburgerIcon onClick={toggleDropdown}>
//             <span></span>
//           </HamburgerIcon>
//           <DropdownMenu isVisible={isDropdownVisible}>
//             <NavLink to="/Dashboard">Dashboard</NavLink>
//             <NavLink to="/Food">food</NavLink>
//             <NavLink to="/Coupons">Coupons</NavLink>
//             <NavLink to="/Profile">Profile</NavLink>
//             {/* <NavLink to="/Orders">Orders</NavLink> */}
//           </DropdownMenu>
//         </HamburgerWrapper>
//       </Nav>
//     </HeaderWrapper>
//   );
// };

// export default Header2;











import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #e3c7a2;
  color: #442902;
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

const HamburgerWrapper = styled.div`
  position: relative;
`;

const HamburgerIcon = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after,
  span {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #442902;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &::before {
    top: 0;
  }

  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    bottom: 0;
  }

  &:hover::before,
  &:hover::after,
  &:hover span {
    background-color: #e3c7a2;
  }
`;

const DropdownMenu = styled.ul`
  position: fixed;
  right: 0;
  width: 20%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0;
  margin: 9px;
  list-style: none;
`;

const DropdownItem = styled.li`
  padding: 15px 30px;
  background: #fff;
  color: #442902;
  font-size: 1.2rem;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e3c7a2;
    transform: scale(1.05);
  }
`;

const Header2 = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        <HamburgerWrapper ref={dropdownRef}>
          <HamburgerIcon onClick={toggleDropdown}>
            <span></span>
          </HamburgerIcon>
          <DropdownMenu isVisible={isDropdownVisible}>
            <DropdownItem>
              <NavLink to="/Dashboard" onClick={closeDropdown}>
                Dashboard
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/Food" onClick={closeDropdown}>
                Food
              </NavLink>
            </DropdownItem>

            <DropdownItem>
              <NavLink to="/Confirmation" onClick={closeDropdown}>
                Confirmation
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/Coupons" onClick={closeDropdown}>
                Coupons
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/Profile" onClick={closeDropdown}>
                Profile
              </NavLink>
            </DropdownItem>

            <DropdownItem>
              <NavLink to="/" onClick={closeDropdown}>
                Logout
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </HamburgerWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header2;
