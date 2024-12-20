import React from 'react';
import styled from 'styled-components';

// Styled components with transitions
const CouponContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background-color: #f1f1f1;
  }
`;

const Emoji = styled.div`
  font-size: 2em;
  margin-right: 15px;
`;

const CouponContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CouponCode = styled.h3`
  font-size: 1.5em;
  color: #333;
`;

const CouponDiscount = styled.p`
  font-size: 1.2em;
  color: #28a745;
`;

const CouponMinAmount = styled.p`
  font-size: 1em;
  color: #007bff;
`;

// Array of food emojis for different coupons
const foodEmojis = ['🍕', '🍔', '🍣', '🍩', '🍪', '🍓', '🍜'];

// Main CouponList component
const CouponList = ({ coupons }) => {
  return (
    <div>
      {coupons.map((coupon, index) => (
        <CouponContainer key={coupon.id}>
          <Emoji>{foodEmojis[index]}</Emoji> {/* Different emoji for each coupon */}
          <CouponContent>
            <CouponCode>{coupon.code}</CouponCode>
            <CouponDiscount>Discount: {coupon.discount}%</CouponDiscount>
            <CouponMinAmount>Min Amount: ₹{coupon.minAmount}</CouponMinAmount>
          </CouponContent>
        </CouponContainer>
      ))}
    </div>
  );
};

// Example data
const coupons = [
  { id: 1, code: 'SAVE15', discount: 15, minAmount: 500 },
  { id: 2, code: 'OFF10', discount: 10, minAmount: 400 },
  { id: 3, code: 'BIGSAVE20', discount: 20, minAmount: 1000 },
  { id: 4, code: 'MEAL5', discount: 5, minAmount: 300 },
  { id: 5, code: 'DISCOUNT25', discount: 25, minAmount: 1500 },
  { id: 6, code: 'WELCOME10', discount: 10, minAmount: 200 },
  { id: 7, code: 'FAMILY20', discount: 20, minAmount: 800 },
];

const App = () => (
  <div>
    <h1>Available Coupons</h1>
    <CouponList coupons={coupons} />
  </div>
);

export default App;
