import React,{useContext} from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useContext(CartContext);
  
  return (
    <div>
    <h2>Cart</h2>
    {cart.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt='imag'/>
        <h3>{item.title}</h3>

        <p>{item.description}</p>
    <Link to='/checkout' >  <button >Proceed to Chechkout</button>  </Link>  
      </div>
    ))}
  </div>
  )
}

export default Cart
