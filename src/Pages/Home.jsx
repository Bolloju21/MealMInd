// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// // Styled Components
// const SliderWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
//   text-align: center;  // Ensures text is centered
// `;

// const SliderImages = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out; // Smooth sliding effect
// `;

// const Slide = styled.div`
//   min-width: 100%;
//   height: 100vh;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
// `;

// const StyledH1 = styled.h1`
//   font-size: 2rem; // Adjust as needed
//   color: white;
//   position: absolute;
//   top: 100px;
//   left: 50%;
//   transform: translateX(-50%);
//   margin: 0;
//   font-weight: bold;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); // Shadow for readability
//   padding: 10px;
// `;

// const StyledP = styled.p`
//   font-size: 20px; // Adjust as needed
//   color: white;
//   position: absolute;
//   top: 400px;
//   left: 50%;
//   transform: translateX(-50%);
  
//   padding: 15px;
//   max-width: 80%;
//   background-color: #442902; // Background for text readability
//   border-radius: 8px;
//   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
// `;

// // ImageSlider Component
// const ImageSlider = () => {
//   const images = [
//     "https://www.corporateinteriorsindia.in/images/novus_img2.jpg",
//     "https://qmaxpestcontrol.com/wp-content/uploads/2021/10/restauration-collective.jpg",
//     "https://www.usnews.com/cmsmedia/16/ee/8f640233491db26b3df80d8f11ad/gettyimages-1411322814.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000); // Change image every 2 seconds

//     return () => clearInterval(intervalId); // Cleanup the interval on unmount
//   }, [images.length]);

//   return (
//     <SliderWrapper>
//       <SliderImages
//         style={{
//           transform: `translateX(-${currentImageIndex * 100}%)`, // Slide effect
//         }}
//       >
//         {images.map((image, index) => (
//           <Slide key={index}>
//             <Image src={image} alt={`Slide ${index + 1}`} />
//           </Slide>
//         ))}
//       </SliderImages>
//       <StyledH1>MealMind, where nutrition meets convenience.</StyledH1>
//       <StyledP>
//         That takes the guesswork out of meal planning. It helps you save time,
//         stay on track, and enjoy delicious meals that are good for both your
//         body and mind.
//       </StyledP>
//     </SliderWrapper>
//   );
// };

// export default ImageSlider;







import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

// Styled Components
const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  text-align: center; // Ensures text is centered
`;

const SliderImages = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Smooth sliding effect
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const StyledH1 = styled.h1`
  font-size: 2rem; // Adjust as needed
  color: white;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); // Shadow for readability
  padding: 10px;
`;

const StyledP = styled.p`
  font-size: 20px; // Adjust as needed
  color: white;
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  max-width: 80%;
  background-color: #442902; // Background for text readability
  border-radius: 8px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const GetStartedButton = styled.button`
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68900;
  }
`;

// ImageSlider Component
const ImageSlider = () => {
  const images = [
    "https://www.corporateinteriorsindia.in/images/novus_img2.jpg",
    "https://qmaxpestcontrol.com/wp-content/uploads/2021/10/restauration-collective.jpg",
    "https://www.usnews.com/cmsmedia/16/ee/8f640233491db26b3df80d8f11ad/gettyimages-1411322814.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [images.length]);

  const handleGetStartedClick = () => {
    navigate("/signup"); // Redirect to the signup page
  };

  return (
    <SliderWrapper>
      <SliderImages
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`, // Slide effect
        }}
      >
        {images.map((image, index) => (
          <Slide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderImages>
      <StyledH1>MealMind, where nutrition meets convenience.</StyledH1>
      <GetStartedButton onClick={handleGetStartedClick}>
        Get Started
      </GetStartedButton>
      <StyledP>
        That takes the guesswork out of meal planning. It helps you save time,
        stay on track, and enjoy delicious meals that are good for both your
        body and mind.
      </StyledP>
    </SliderWrapper>
  );
};

export default ImageSlider;
