import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  color: #333;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #555;
`;

const Section = styled.div`
  margin: 30px 0;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(117, 77, 8, 0.1);
  font-size: 1rem;
  color: #444;
`;

const NoOrders = styled.li`
  font-size: 1rem;
  color: #888;
`;

function Confirmation() {
  const location = useLocation();
  const { orderId } = location.state || {}; // Retrieve the orderId from state

  const [orderDetails, setOrderDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load existing order details (orderId and timestamp) from localStorage or initialize with an empty array
  useEffect(() => {
    const savedOrderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];

    if (orderId && !savedOrderDetails.some((order) => order.id === orderId)) {
      const timestamp = new Date().toLocaleString(); // Get current timestamp
      savedOrderDetails.push({ id: orderId, timestamp }); // Add new order with timestamp
      localStorage.setItem('orderDetails', JSON.stringify(savedOrderDetails)); // Save to localStorage
    }
    setOrderDetails(savedOrderDetails);
  }, [orderId]);

  // Filter orders based on the search term (timestamp)
  const filteredOrders = orderDetails.filter((order) =>
    order.timestamp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Heading>Order Confirmation</Heading>
      {orderId ? (
        <Message>
          Your order has been successfully submitted! Your order ID is: <strong>{orderId}</strong>
        </Message>
      ) : (
        <Message>There was an issue with your order. Please try again.</Message>
      )}

      <Section>
        <SubHeading>Previous Orders</SubHeading>
        <Label>
          Search by Timestamp:
          <Input
            type="text"
            placeholder="Search by date/time"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Label>
        <OrderList>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <OrderItem key={index}>
                Order ID: {order.id} | Timestamp: {order.timestamp}
              </OrderItem>
            ))
          ) : (
            <NoOrders>No orders found for the given timestamp.</NoOrders>
          )}
        </OrderList>
      </Section>
    </Container>
  );
}

export default Confirmation;

