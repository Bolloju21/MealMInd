import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #34495e;
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureItem = styled.li`
  background-color: #ecf0f1;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  text-align: center;
`;

const AboutUs = () => {
  return (
    <Container>
      <Title>About MealMind</Title>
      <Subtitle>Where nutrition meets convenience</Subtitle>
      <Description>
        MealMind takes the guesswork out of meal planning. We believe that eating healthy should be easy, convenient, and enjoyable. Our platform helps you save time, stay on track, and enjoy delicious meals that are good for both your body and mind.
        <br />
        Whether you're a busy professional, a fitness enthusiast, or just someone looking to improve your eating habits, MealMind is here to help you plan meals that align with your goals. Our meal planning tool and curated recipes allow you to focus on what really matters — your health.
      </Description>
      <FeatureList>
        <FeatureItem>Save Time: No more wondering what to cook</FeatureItem>
        <FeatureItem>Stay On Track: Healthy meals made easy</FeatureItem>
        <FeatureItem>Delicious Recipes: Nutrient-rich meals for all tastes</FeatureItem>
        <FeatureItem>Mindful Eating: Fuel your body and mind</FeatureItem>
      </FeatureList>
    </Container>
  );
};

export default AboutUs;
