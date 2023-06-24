import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className='row header-area'>
        <div className='col-5'>ShopiFy</div> 
        <div className='col-3'>
          <input type='text' placeholder='Search your Products'/>
        </div>
        <div className='col-3'>More</div>
        <div className='col-1'>
          <Link to='/cart'>Cart ({cart.length})</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
