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
    <>
    {/* <div style={{padding:"200px"}}>
      I m checkout<br></br>
   Name :   <input type='text' value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/> <br></br>
    Email :  <input type='email' value={email} placeholder='Your email' onChange={(e) => setemail(e.target.value)}/><br></br>
   Address :   <input type='address' value={address} placeholder='enter your address' onChange={(e) => setaddress(e.target.value)} /><br></br>
      <button onClick={handelplaceorder}>Place Order</button>
    </div> */}
   <div style={{padding:"180px"}}>
    <h3>Contact Details</h3>
   <form style={{margin: '20px', padding: '159px',}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="contactnumber" class="form-label">Contact number</label>
    <input type="number" class="form-control" id="contactnumber"/>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address"/>
  </div>
  <div class="mb-3">
    <label for="pincode" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="pincode"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class=" form-control form-control-lg" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
   </div>
  

    </>
  )
}

export default CheckOut
