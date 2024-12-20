import React from "react";
import { useAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content:center;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, #f3e7e9 0%, #e3c7a2 100%);
  color: #442902;
  padding: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  margin-top:15%;
  
`;

const FeatureCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem; /* Increased size */
  margin-bottom: 0.5rem;
  color: #e3c7a2;
  

`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  color: #442902;
`;

const Dashboard = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <DashboardWrapper>
      <FeaturesGrid>
        <FeatureCard onClick={() => handleNavigation("/food")}>
          <FeatureIcon>🍳</FeatureIcon>
          <FeatureTitle>Breakfast</FeatureTitle>
        </FeatureCard>
        <FeatureCard onClick={() => handleNavigation("/food")}>
          <FeatureIcon>🍲</FeatureIcon>
          <FeatureTitle>Lunch</FeatureTitle>
        </FeatureCard>
        {/* <FeatureCard onClick={() => handleNavigation("/food")}>
          <FeatureIcon>🍪</FeatureIcon>
          <FeatureTitle>Snacks & Drinks</FeatureTitle>
        </FeatureCard> */}
        <FeatureCard onClick={() => handleNavigation("/food")}>
          <FeatureIcon>🍝</FeatureIcon>
          <FeatureTitle>Dinner</FeatureTitle>
        </FeatureCard>
      </FeaturesGrid>
    </DashboardWrapper>
  );
};

export default Dashboard;
