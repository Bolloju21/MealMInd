
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const foodItems = {
//   vegItems: [
//     { id: 1, name: 'Pancakes', price: 100, category: 'veg' },
//     { id: 2, name: 'Vegetarian Pizza', price: 400, category: 'veg' },
//     { id: 3, name: 'Salad', price: 300, category: 'veg' },
//     { id: 4, name: 'Paneer Tikka', price: 250, category: 'veg' },
//     { id: 5, name: 'Mushroom Curry', price: 350, category: 'veg' },
//     { id: 6, name: 'Veg Biryani', price: 300, category: 'veg' },
//     { id: 7, name: 'Dal Fry', price: 200, category: 'veg' },
//     { id: 8, name: 'Aloo Paratha', price: 150, category: 'veg' },
//   ],
//   nonVegItems: [
//     { id: 9, name: 'Grilled Chicken', price: 500, category: 'non-veg' },
//     { id: 10, name: 'Chicken Biryani', price: 500, category: 'non-veg' },
//     { id: 11, name: 'Fish Curry', price: 600, category: 'non-veg' },
//     { id: 12, name: 'Egg Curry', price: 400, category: 'non-veg' },
//     { id: 13, name: 'Mutton Rogan Josh', price: 700, category: 'non-veg' },
//     { id: 14, name: 'Chicken Tikka', price: 450, category: 'non-veg' },
//     { id: 15, name: 'Fish Fry', price: 550, category: 'non-veg' },
//     { id: 16, name: 'Tandoori Chicken', price: 750, category: 'non-veg' },
//   ],
// };

// const coupons = [
//   { id: 1, code: 'SAVE15', discount: 15, minAmount: 500 },
//   { id: 2, code: 'OFF10', discount: 10, minAmount: 400 },
//   { id: 3, code: 'BIGSAVE20', discount: 20, minAmount: 1000 },
//   { id: 4, code: 'MEAL5', discount: 5, minAmount: 300 },
//   { id: 5, code: 'DISCOUNT25', discount: 25, minAmount: 1500 },
//   { id: 6, code: 'WELCOME10', discount: 10, minAmount: 200 },
//   { id: 7, code: 'FAMILY20', discount: 20, minAmount: 800 },
// ];

// function Food() {
//   const [order, setOrder] = useState([]);
//   const [selectedItemId, setSelectedItemId] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [couponCode, setCouponCode] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [finalAmount, setFinalAmount] = useState(0);
  
//   const navigate = useNavigate(); // For navigation

//   const allItems = [...foodItems.vegItems, ...foodItems.nonVegItems];

//   const handleAddItem = (e) => {
//     e.preventDefault();
//     const selectedItem = allItems.find((item) => item.id === parseInt(selectedItemId));
//     if (selectedItem && quantity > 0) {
//       const newOrder = [...order, { ...selectedItem, quantity }];
//       setOrder(newOrder);

//       const newTotal = newOrder.reduce((total, item) => total + item.price * item.quantity, 0);
//       setTotalAmount(newTotal);
//       setFinalAmount(newTotal); // Reset final amount

//       setSelectedItemId('');
//       setQuantity(1);
//       setErrorMessage('');
//     }
//   };

//   const handleCouponChange = (e) => {
//     const selectedCoupon = e.target.value;
//     setCouponCode(selectedCoupon);

//     const validCoupon = coupons.find(
//       (coupon) => coupon.code === selectedCoupon && totalAmount >= coupon.minAmount
//     );

//     if (validCoupon) {
//       const discount = (totalAmount * validCoupon.discount) / 100;
//       const updatedFinalAmount = totalAmount - discount;
//       setFinalAmount(updatedFinalAmount);
//     } else {
//       setFinalAmount(totalAmount);
//     }
//   };

//   // Function to generate a random order ID
//   const generateOrderId = () => {
//     return `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
//   };

//   const handleSubmitOrder = async (e) => {
//     e.preventDefault();
//     if (order.length === 0) {
//       setErrorMessage('Please add at least one item before submitting the order.');
//     } else {
//       setSuccessMessage('Your order has been successfully submitted!');

//       // Generate a random order ID
//       const orderId = generateOrderId();

//       // Send order to the mock server (JSON server)
//       const orderData = {
//         orderId, // Include orderId in the data
//         items: order,
//         totalAmount,
//         finalAmount,
//         couponCode,
//         orderDate: new Date().toISOString(),
//       };

//       try {
//         const response = await fetch('http://localhost:3002/orders', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (response.ok) {
//           const result = await response.json();
//           console.log('Order saved:', result);
//           // Redirect to confirmation page with the order ID
//           navigate('/confirmation', { state: { orderId } });
//         } else {
//           console.error('Error saving order');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Food Ordering Form</h1>
//       <form>
//         <div>
//           <label>
//             Select Food Item:
//             <select
//               value={selectedItemId}
//               onChange={(e) => setSelectedItemId(e.target.value)}
//               required
//             >
//               <option value="" disabled>
//                 Choose an item
//               </option>
//               <optgroup label="Vegetarian Items">
//                 {foodItems.vegItems.map((item) => (
//                   <option key={item.id} value={item.id}>
//                     {item.name} - ₹{item.price}
//                   </option>
//                 ))}
//               </optgroup>
//               <optgroup label="Non-Vegetarian Items">
//                 {foodItems.nonVegItems.map((item) => (
//                   <option key={item.id} value={item.id}>
//                     {item.name} - ₹{item.price}
//                   </option>
//                 ))}
//               </optgroup>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Quantity:
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               min="1"
//               required
//             />
//           </label>
//         </div>
//         <button type="button" onClick={handleAddItem}>
//           Add Item
//         </button>
//       </form>

//       <div>
//         <label>
//           Coupon Code:
//           <select
//             value={couponCode}
//             onChange={handleCouponChange}
//           >
//             <option value="">Select Coupon</option>
//             {coupons.map((coupon) => (
//               <option key={coupon.id} value={coupon.code}>
//                 {coupon.code} - {coupon.discount}% off on orders over ₹{coupon.minAmount}
//               </option>
//             ))}
//           </select>
//         </label>
//       </div>

//       {order.length > 0 && (
//         <div>
//           <h2>Added Items</h2>
//           <ul>
//             {order.map((item, index) => (
//               <li key={index}>
//                 {item.name} (₹{item.price}) x {item.quantity} = ₹
//                 {item.price * item.quantity}
//               </li>
//             ))}
//           </ul>
//           <h3>Total Amount: ₹{totalAmount}</h3>
//         </div>
//       )}

//       <div>
//         <h3>Final Total after Discount: ₹{finalAmount}</h3>
//       </div>

//       <form onSubmit={handleSubmitOrder}>
//         <button type="submit">Submit Order</button>
//       </form>

//       {errorMessage && (
//         <div style={{ color: 'red', marginTop: '10px' }}>
//           <strong>{errorMessage}</strong>
//         </div>
//       )}

//       {successMessage && (
//         <div style={{ color: 'green', marginTop: '10px' }}>
//           <strong>{successMessage}</strong>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Food;
















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const foodItems = {
  vegItems: [
    { id: 1, name: 'Pancakes', price: 100, category: 'veg' },
    { id: 2, name: 'Vegetarian Pizza', price: 400, category: 'veg' },
    { id: 3, name: 'Salad', price: 300, category: 'veg' },
    { id: 4, name: 'Paneer Tikka', price: 250, category: 'veg' },
    { id: 5, name: 'Mushroom Curry', price: 350, category: 'veg' },
    { id: 6, name: 'Veg Biryani', price: 300, category: 'veg' },
    { id: 7, name: 'Dal Fry', price: 200, category: 'veg' },
    { id: 8, name: 'Aloo Paratha', price: 150, category: 'veg' },
  ],
  nonVegItems: [
    { id: 9, name: 'Grilled Chicken', price: 500, category: 'non-veg' },
    { id: 10, name: 'Chicken Biryani', price: 500, category: 'non-veg' },
    { id: 11, name: 'Fish Curry', price: 600, category: 'non-veg' },
    { id: 12, name: 'Egg Curry', price: 400, category: 'non-veg' },
    { id: 13, name: 'Mutton Rogan Josh', price: 700, category: 'non-veg' },
    { id: 14, name: 'Chicken Tikka', price: 450, category: 'non-veg' },
    { id: 15, name: 'Fish Fry', price: 550, category: 'non-veg' },
    { id: 16, name: 'Tandoori Chicken', price: 750, category: 'non-veg' },
  ],
};

const coupons = [
  { id: 1, code: 'SAVE15', discount: 15, minAmount: 500 },
  { id: 2, code: 'OFF10', discount: 10, minAmount: 400 },
  { id: 3, code: 'BIGSAVE20', discount: 20, minAmount: 1000 },
  { id: 4, code: 'MEAL5', discount: 5, minAmount: 300 },
  { id: 5, code: 'DISCOUNT25', discount: 25, minAmount: 1500 },
  { id: 6, code: 'WELCOME10', discount: 10, minAmount: 200 },
  { id: 7, code: 'FAMILY20', discount: 20, minAmount: 800 },
];

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color:rgb(215, 198, 39);
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color:rgb(120, 89, 17);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const Item = styled.li`
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #444;
`;

const TotalAmount = styled.h3`
  color: #555;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 10px;
`;

function Food() {
  const [order, setOrder] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const navigate = useNavigate(); // For navigation

  const allItems = [...foodItems.vegItems, ...foodItems.nonVegItems];

  const handleAddItem = (e) => {
    e.preventDefault();
    const selectedItem = allItems.find((item) => item.id === parseInt(selectedItemId));
    if (selectedItem && quantity > 0) {
      const newOrder = [...order, { ...selectedItem, quantity }];
      setOrder(newOrder);

      const newTotal = newOrder.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalAmount(newTotal);
      setFinalAmount(newTotal); // Reset final amount

      setSelectedItemId('');
      setQuantity(1);
      setErrorMessage('');
    }
  };

  const handleCouponChange = (e) => {
    const selectedCoupon = e.target.value;
    setCouponCode(selectedCoupon);

    const validCoupon = coupons.find(
      (coupon) => coupon.code === selectedCoupon && totalAmount >= coupon.minAmount
    );

    if (validCoupon) {
      const discount = (totalAmount * validCoupon.discount) / 100;
      const updatedFinalAmount = totalAmount - discount;
      setFinalAmount(updatedFinalAmount);
    } else {
      setFinalAmount(totalAmount);
    }
  };

  const generateOrderId = () => {
    return `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (order.length === 0) {
      setErrorMessage('Please add at least one item before submitting the order.');
    } else {
      setSuccessMessage('Your order has been successfully submitted!');

      const orderId = generateOrderId();

      const orderData = {
        orderId,
        items: order,
        totalAmount,
        finalAmount,
        couponCode,
        orderDate: new Date().toISOString(),
      };

      try {
        const response = await fetch('http://localhost:3002/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Order saved:', result);
          navigate('/confirmation', { state: { orderId } });
        } else {
          console.error('Error saving order');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Container>
      <Title>Food Ordering Form</Title>
      <form>
        <div>
          <Label>
            Select Food Item:
            <Select
              value={selectedItemId}
              onChange={(e) => setSelectedItemId(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose an item
              </option>
              <optgroup label="Vegetarian Items">
                {foodItems.vegItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} - ₹{item.price}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Non-Vegetarian Items">
                {foodItems.nonVegItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} - ₹{item.price}
                  </option>
                ))}
              </optgroup>
            </Select>
          </Label>
        </div>
        <div>
          <Label>
            Quantity:
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              required
            />
          </Label>
        </div>
        <Button type="button" onClick={handleAddItem}>
          Add Item
        </Button>
        
      </form>

      <div>
        <Label>
          Coupon Code:
          <Select value={couponCode} onChange={handleCouponChange}>
            <option value="">Select Coupon</option>
            {coupons.map((coupon) => (
              <option key={coupon.id} value={coupon.code}>
                {coupon.code} - {coupon.discount}% off on orders over ₹{coupon.minAmount}
              </option>
            ))}
          </Select>
        </Label>
      </div>

      {order.length > 0 && (
        <div>
          <h2>Added Items</h2>
          <ItemList>
            {order.map((item, index) => (
              <Item key={index}>
                {item.name} (₹{item.price}) x {item.quantity} = ₹{item.price * item.quantity}
              </Item>
            ))}
          </ItemList>
          <TotalAmount>Total Amount: ₹{totalAmount}</TotalAmount>
        </div>
      )}

      <div>
        <TotalAmount>Final Total after Discount: ₹{finalAmount}</TotalAmount>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <Button type="submit">Submit Order</Button>
      </form>

      {errorMessage && <ErrorMessage><strong>{errorMessage}</strong></ErrorMessage>}
      {successMessage && <SuccessMessage><strong>{successMessage}</strong></SuccessMessage>}
    </Container>
  );
}

export default Food;
