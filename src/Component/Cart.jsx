import React,{useContext} from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../Images/emptyCart.png'
import '../CSS/cart.css'

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
  
  return (
    <>


{cart.length > 1 ? (
<div style={{border:"1px solid black",marginRight:"547px"}}>
  <h2>Cart</h2>
  {cart.map((item) => (
    <div key={item.id} >
      <img src={item.image} alt="imag" style={{width:"10%",marginTop:"50px"}} />
      <div >
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
<div>
<span>Price Details</span>
<div> <h3>Total Product Price: ${calculateTotal(cart)}</h3></div>
<div> <h3>Order Total: ${calculateTotal(cart)}</h3></div>
</div>
Clicking on ‘Continue’ will not deduct any money
<div >



<Link to={login ? "/checkout" : "/login"} >
  
        <button style={{ marginTop: "10px" }}>Continue</button>
      </Link>
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

  </>
  
  )
}

export default Cart
