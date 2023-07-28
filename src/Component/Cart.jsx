import React,{useContext} from 'react'
import { CartContext } from '../CartContext'


import { useNavigate } from 'react-router-dom';
import emptyCart from '../Images/emptyCart.png'
import '../CSS/cart.css'
import { Button } from '@mui/material';
import { Payment } from '@mui/icons-material';

const Cart = () => {
    const { cart,login } = useContext(CartContext);
    const navigate = useNavigate();
  
    function calculateTotal(cart) {
      let total = 0;
      cart.forEach((item) => {
        if (item.price) {
          total += item.price;
        }
      });
      return total.toFixed(2); // toFixed(2) rounds the total to 2 decimal places
    }
    console.log("cart len",cart.length,cart)
    const navigateToHome = () => {
      navigate('/');
    };
    const handelcontinue = () => {
      if(login){
        navigate('/checkout')
      }else{
        window.alert("You are not login. Login First")
        navigate('/login')
      }
    }
  
  return (
    <>
    <div className='carthai'>


{cart.length > 1 ? (
<div style={{border:"1px solid black",marginRight:"547px"}}>
  <h2>Cart</h2>
  {cart.map((item) => (
    <div className='cartbox' key={item.id} >
      <img src={item.image} alt="imag" style={{width:"10%",marginTop:"50px"}} />
      <div >
        <h4>₹-{item.price}</h4>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
<div>
<span>Price Details</span>
<div> <h3>Total Product Price: ₹{calculateTotal(cart)}</h3></div>
<div> <h3>Order Total: ₹{calculateTotal(cart)}</h3></div>
</div>
Clicking on ‘Continue’ will not deduct any money
<div >




  
      
        <Button
             onClick={handelcontinue}
              variant='contained'
              startIcon={<Payment />}
              style={{ backgroundColor: 'rgb(159, 32, 137)', marginLeft: '39px' }}
            >
              Continue
            </Button>
       
    
</div>
</div>
) : (
  <div className="empty">
  <img src={emptyCart} alt="emptyImage" className="emptyImage" />
  <p className="yourcartEmpty">Your cart is empty</p>
  <p className="xtra">Just relax, let us help you find some first-class products</p>
  <button className="start" onClick={navigateToHome}>
    Start Shopping
  </button>
</div>
)}
</div>
  </>
  
  )
}

export default Cart
