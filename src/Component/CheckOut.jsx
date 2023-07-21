



import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Modal, Typography } from '@mui/material';
import loader from '../Images/loader.gif';
import { CartContext } from '../CartContext';

const CheckOut = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');
  const cartContext = useContext(CartContext);
  const { clearCart } = cartContext;

  const navigate = useNavigate();

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


  
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      clearCart(); // Call the clearCart function to reset the cart
      navigate("/");
    }, 3000); // Show the loader for 3 seconds
  };

  return (
    <>
      <div className='mainChech' style={{ padding: "180px", background:"linear-gradient(rgb(253, 233, 242) 0%, rgb(253, 240, 232) 100%, rgb(253, 240, 232) 100%)"}}>
        <h3 style={{ marginLeft: "300px" }}>Contact Details</h3>
        <form onSubmit={handleSubmit} style={{ margin: '-56px', padding: '159px', marginLeft: "290px", marginRight: "220px", height: "90%", width: "50%" }}>
        
         
   <div class="mb-3"  >
     <label for="cardnumber" class="form-label">Card Number</label>
     <input type="number" onChange={handleCardNumberChange}     value={cardNumber} class="form-control" required id="cardnumber" aria-describedby="emailHelp" placeholder='Enter Card Number'/>
   
   </div>

   <div class="mb-3">
     <label for="Expiry" class="form-label">Enter Expiry Date</label>
     <input type="number" onChange={handleExpiryDateChange}  required    value={expiryDate} class="form-control" id="Expiry" placeholder='Enter Expiry Date'/>
   </div>
   <div class="mb-3">
     <label for="cvv" class="form-label">Enter CVV</label>
     <input type="text" onChange={handleCVVChange} required    value={cvv} class="form-control" id="cvv" placeholder='Enter CVV'/>
   </div>
   <div class="mb-3">
     <label for="address" class="form-label">Enter Your Address</label>
     <input type="number text"  onChange={handleAddressChange} required    value={address} class="form-control" id="address" placeholder='Enter Your Address'/>
   </div>





          <Button className="buttonSubmit" variant='contained' type="submit" style={{ color: "black", background: "white", margin: "15px auto" }}>
            Pay Now
          </Button>
        </form>

        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {open ? 'Processing...' : 'Thank You'}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {open ? 'Your order is being processed. Please wait...' : 'Your order is placed successfully'}
              <br />
              {open ? <img src={loader} alt='loader' style={{ width: "100px", height: "100px", display: 'flex', alignItems: "center", justifyContent: "center", margin: "5px auto", padding: "5px 5px" }} /> : null}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CheckOut;

