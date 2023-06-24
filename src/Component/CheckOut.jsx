import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
    const [name,setName] = useState('');
    const [address,setaddress] = useState('');
    const [email,setemail] = useState('');
    const navigate = useNavigate();
    // const handelplaceorder = () => {
    //  const userdetail = {
    //     name,address,email,
    //  };
    //  navigate('/orderdetail', {state : {userdetail}})
    // }

    const generateOrderId = () => {
        // Generate a unique order ID
        const orderId = Math.floor(Math.random() * 1000);
    
        return orderId;
      };
    const handelplaceorder = () => {
        const orderDetails = {
            id: generateOrderId(),
          name: name,
          email: email,
          address: address,
        };
        navigate('/orderdetail', { state: { orderDetails: orderDetails } });
      };



  return (
    <div>
      I m checkout<br></br>
   Name :   <input type='text' value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/> <br></br>
    Email :  <input type='email' value={email} placeholder='Your email' onChange={(e) => setemail(e.target.value)}/><br></br>
   Address :   <input type='address' value={address} placeholder='enter your address' onChange={(e) => setaddress(e.target.value)} /><br></br>
      <button onClick={handelplaceorder}>Place Order</button>
    </div>
  )
}

export default CheckOut
