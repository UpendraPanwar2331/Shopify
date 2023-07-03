import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import meeshoLogo from './Images/meeshoLogo.png'
import './CSS/Header.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    // <div>
    //   <div className='row header-area'>
    //     <div className='col-3'>
    //       <img src={meeshoLogo} alt='meeshologooo' />
    //       </div> 
    //     <div className='col-3' >
    //       <input type='text' placeholder='Search your Products' />
    //     </div>
    //     <div className='col-3'>More</div>
    //     <div className='col-1'>
    //       <Link to='/cart'>Cart ({cart.length})</Link>
    //     </div>
    //   </div>
    // </div>
    <div className="container1">
    <header className="header">
      <div className="left-side">
        <div className="logo">
          <img src={meeshoLogo}  alt="logo" />
        </div>
        <div className="input-box">
     
          <input  
            className="input-search"
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
         
          
          />
        </div>
      </div>

      <div className="right-side">
        <ul className="list">
          <li className="download">DownLoad App</li>
          <li className="supplier">Become a Supplier</li>
          <li>Profile</li>
        <Link to='/cart'>  <li>Cart</li>  </Link>
        </ul>
      </div>
    </header>
    <header className="header2">
      <ul className="items">
        <li>Women Ethnic</li>
        <li>Women Western</li>
        <li >Men</li>
        <li >Kids</li>
        <li >Home & Kitchen</li>
        <li >Beauty & Health</li>
        <li >Jewellery & Accessories</li>
        <li >Bags & Footwear</li>
        <li >Electronics</li>
      </ul>
    </header>
  </div>
  );
};

export default Header;
