import React, { useContext, useState } from 'react';
import { MyAppContext } from './App';
import { useNavigate } from 'react-router-dom';
import safety from '../Images/safety.png';
import emptyCart from '../Images/emptyCart.png';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Loader from './Loader';
import '../Styles/cart.css';

function Cart() {
  const navigate = useNavigate();
  const { setCount, setCartItem, login } = useContext(MyAppContext);
  const [showLoader, setShowLoader] = useState(false);

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToPayment = () => {
    setShowLoader(true);
    setTimeout(() => {
      if (login) {
        navigate("/payment")
      } else {
        navigate('/login')
      }
    }, 600);
  };

  const removeItem = (productId) => {
    setCount((prev) => prev - 1);
    const updatedCart = cartItem.filter((product) => product.id !== productId);
    setCartItem(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItem.forEach((product) => {
      total += product.price * product.Quantity;
    });
    return total;
  };

  const { cartItem } = useContext(MyAppContext);

  const quantity = (productId) => {
    const updatedCart = cartItem.map((product) => {
      if (product.id === productId) {
        return { ...product, Quantity: product.Quantity + 1 };
      }
      return product;
    });
    setCartItem(updatedCart);
  };

  const minusquantity = (productId) => {
    const updatedCart = cartItem.map((product) => {
      if (product.id === productId && product.Quantity > 1) {
        return { ...product, Quantity: product.Quantity - 1 };
      }
      return product;
    });
    setCartItem(updatedCart);
  };

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          {cartItem.length ? (
            <div className="cart-containers">
              <div className="products-section">
                <h3 className="productNames">Cart {cartItem.length} Items</h3>
                <div className="products-all">
                  {cartItem.map((product) => (
                    <div className="cart-items" key={product.id}>
                      <div className="item-image">
                        <img src={product.thumbnail} alt={product.title} className="photo" />
                      </div>
                      <div className="item-details">
                        <h3 className="productName">{product.title}</h3>
                        <p className="textc">₹{product.price}</p>
                        <p className="textc">All issues easy returns allowed</p>
                        <p className="textc">Qty: <button onClick={() => minusquantity(product.id)}>-</button> <span>{product.Quantity}</span> <button onClick={() => quantity(product.id)}>+</button></p>

                        <Button variant="text" startIcon={<CloseIcon />} className="btn" onClick={() => removeItem(product.id)} style={{ color: "rgb(159, 32, 137)" }}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pricing-section">
                <h3 className="productName">Price Details</h3>
                <div className="price-info">
                  <p>Total Product Price</p>
                  <p>+ ₹{calculateTotal()}</p>
                </div>

                <div className="orderinfo">
                  <p className="productName">Order Total</p>
                  <p>₹{calculateTotal()}</p>
                </div>
                <div className="clicking">
                  <p className="textc abc"> Clicking on Continue will not deduct any money</p>
                </div>
                <div>
                  <button className="buttonss" onClick={navigateToPayment}>
                    Continue
                  </button>
                </div>
                <div className="safety">
                  <img src={safety} className="safetyImage" alt="Safety" />
                </div>
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
      )}
    </>
  );
}

export default Cart;
