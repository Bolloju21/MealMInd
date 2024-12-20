import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import styled from 'styled-components';  // Import styled-components

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const DatePicker = styled.input`
  padding: 5px;
  margin: 10px 0;
`;

const LogoutButton = styled.button`
  padding: 10px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;

  &:hover {
    background-color: #d32f2f;
  }
`;

const OrderCard = styled.div`
  border: 1px solid #ccc;
  margin: 15px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;

const OrderTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
`;

const OrderDetails = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ItemList = styled.ul`
  padding-left: 20px;
`;

const Item = styled.li`
  font-size: 1rem;
  color: #333;
`;

const NoOrdersMessage = styled.p`
  color: #777;
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const navigate = useNavigate();  // Initialize navigate function

  // Fetch orders from the server
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3002/orders');
        if (response.ok) {
          const data = await response.json();
          // Sort orders by orderDate in descending order
          data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
          setOrders(data);
          setFilteredOrders(data); // Default to all orders
        } else {
          console.error('Error fetching orders');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, []);

  // Handle date change and filter orders
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (date) {
      const filtered = orders.filter(
        (order) => new Date(order.orderDate).toLocaleDateString() === new Date(date).toLocaleDateString()
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orders); // Show all orders if no date selected
    }
  };

  // Format the order date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Logout function that redirects to home page
  const handleLogout = () => {
    // Clear any user session data (e.g., token, user info)
    // localStorage.removeItem('userToken');
    // sessionStorage.clear();
    // Optionally, you can perform more cleanup here

    // Redirect to the home page
    navigate('/');
  };

  return (
    <Container>
      <Title>Orders Page</Title>
      <div>
        <label>Select Date: </label>
        <DatePicker
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      {/* Logout button */}
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>

      {filteredOrders.length === 0 ? (
        <NoOrdersMessage>No orders found for this date.</NoOrdersMessage>
      ) : (
        <div>
          {filteredOrders.map((order, index) => (
            <OrderCard key={index}>
              <OrderTitle>Order #{index + 1}</OrderTitle>
              <OrderDetails>Date: {formatDate(order.orderDate)}</OrderDetails>
              <ItemList>
                {order.items.map((item, idx) => (
                  <Item key={idx}>
                    {item.name} (₹{item.price}) x {item.quantity} = ₹{item.price * item.quantity}
                  </Item>
                ))}
              </ItemList>
              <OrderDetails>Total Amount: ₹{order.totalAmount}</OrderDetails>
              <OrderDetails>Final Amount: ₹{order.finalAmount}</OrderDetails>
              {order.couponCode && <OrderDetails>Coupon Used: {order.couponCode}</OrderDetails>}
            </OrderCard>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Orders;
