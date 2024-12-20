import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterWrapper = styled.footer`
  background-color: #442902;
  color: white;
  padding: 20px 0;
  text-align: center;
`;
 
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.div`
  font-size: 20px;s
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  font-size: 14px;
  margin-bottom: 10px;

  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterSocial = styled.div`
  font-size: 14px;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterText>
                    <strong>Canteen Management System</strong> &copy; 2024 | All Rights Reserved
                </FooterText>
                <FooterLinks>
                    <a href="/privacy-policy">Privacy Policy</a>
                    |
                    <a href="/terms-of-service">Terms of Service</a>
                    |
                    <a href="/contact-us">Contact Us</a>
                </FooterLinks>
                <FooterSocial>
                    <span>Follow us:</span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    |
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    |
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </FooterSocial>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
