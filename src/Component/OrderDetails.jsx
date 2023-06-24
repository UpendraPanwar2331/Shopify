import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../CartContext';

const OrderDetail = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;
  const {cart} = useContext(CartContext);

  // Check if orderDetails is undefined
  if (!orderDetails) {
    return <div>Error: Order details not found.</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Name: {orderDetails.name}</p>
      <p>Email: {orderDetails.email}</p>
      <p>Address: {orderDetails.address}</p>
      <p>Order ID: {orderDetails?.id}</p>
      <p>Payment Status: COD</p>
      {
       cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt='imag'/>
          <h3>{item.title}</h3>
  
          <p>{item.description}</p>
   
        </div>
      ))
      }
   
    </div>
  );
};

export default OrderDetail;
