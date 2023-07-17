import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/chechout.css"
import { Box, Button, Modal, Typography } from '@mui/material';
import loader from '../Images/loader.gif';
import { CartContext } from '../CartContext';

const CheckOut = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');

    const navigate = useNavigate();
    // const handelplaceorder = () => {
    //  const userdetail = {
    //     name,address,email,
    //  };
    //  navigate('/orderdetail', {state : {userdetail}})
    // }
    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
    };
  
    const handleExpiryDateChange = (event) => {
      setExpiryDate(event.target.value);
    };
  
    const handleCVVChange = (event) => {
      setCVV(event.target.value);
    };
  
    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };

    const generateOrderId = () => {
        // Generate a unique order ID
        const orderId = Math.floor(Math.random() * 1000);
    
        return orderId;
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
        
    
        setTimeout(() => {
          setOpen(false);
          navigate("/");
         
        }, 4000);
      };
    // const handleSubmit = () => {

    //   setOpen(true);
    
    //   setTimeout(()=>{
    //     navigate("/")
       
    //   },9000)
    // }

        // const orderDetails = {
        //     id: generateOrderId(),
        //   cardNumber: cardNumber ,
        //   expiryDate: expiryDate,
        //   cvv: cvv,
        //   address:address
        // };
        // navigate('/orderdetail', { state: { orderDetails: orderDetails } });
      ;

      const handleClose = () => {
        setOpen(false);
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
   <div className='mainChech' style={{padding:"180px"}}>
   <h3 style={{marginLeft:"300px"}}  >Contact Details</h3>
   <form onSubmit={handleSubmit} style={{margin: '-56px', padding: '159px',marginLeft:"290px",marginRight:"220px",height:"90%", width:"50%"}}>
  
  <div class="mb-3"  >
    <label for="cardnumber" class="form-label">Card Number</label>
    <input type="number" onChange={handleCardNumberChange}     value={cardNumber} class="form-control" id="cardnumber" aria-describedby="emailHelp" placeholder='Enter Card Number'/>
   
  </div>

  <div class="mb-3">
    <label for="Expiry" class="form-label">Enter Expiry Date</label>
    <input type="number" onChange={handleExpiryDateChange}     value={expiryDate} class="form-control" id="Expiry" placeholder='Enter Expiry Date'/>
  </div>
  <div class="mb-3">
    <label for="cvv" class="form-label">Enter CVV</label>
    <input type="text" onChange={handleCVVChange}     value={cvv} class="form-control" id="cvv" placeholder='Enter CVV'/>
  </div>
  <div class="mb-3">
    <label for="address" class="form-label">Enter Your Address</label>
    <input type="number"  onChange={handleAddressChange}     value={address} class="form-control" id="address" placeholder='Enter Your Address'/>
  </div>

  <Button  className="buttonSubmit" variant='contained' type="submit" style={{color:"black",background:"white",margin:"15px auto"}}>
        Pay Now
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ThankYou
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Order is placed Successfully<br></br>
            
            Redirecting you to home page <br></br>
            <img src={loader} alt='loader' style={{width:"100px",height:"100px",display:'flex',alignItems:"center", justifyContent:"center",margin:"5px auto", padding:"5px 5px"}}/>
          </Typography>
        </Box>
      </Modal>



</form>
    
   </div>
  

    </>
  )
}

export default CheckOut
