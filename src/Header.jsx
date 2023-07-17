import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import meeshoLogo from './Images/meeshoLogo.png'
import './CSS/Header.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Person2Outlined, PhoneAndroidOutlined } from '@mui/icons-material';
const Header = () => {
  const navigate = useNavigate();
  const { cart,inputValue,setInputValue } = useContext(CartContext);

  const handleNavigate = (category) => {
    navigate(`/homeReplace/${category}`);
  };
  const cartmai = () => {
    navigate('/cart')
  }
  const handelmeesho = () => {
    navigate('/meesho')
  }
  const handelinput = (e) => {
    navigate("meesho")
    setInputValue(e.target.value);
  }
console.log("hshsh",cart,cart.length)
  return (
    <div className="container1">
    <header className="header">
      <div className="left-side">
        <div className="logo">
          <img src={meeshoLogo}  alt="logo" onClick={handelmeesho}/>
        </div>
        <div className="input-box">
     
          <input  
            className="input-search"
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            value={inputValue}
            onChange={handelinput}
          
          />
        </div>
      </div>

      <div className="right-side">
        <ul className="list">
          <li className="download"><PhoneAndroidOutlined fontSize="small" className='icons' />Download App </li>
          <li className="supplier">Become a Supplier</li>
          <li>  <div className="profilepart">
              <div className='profileicon' ><Person2Outlined fontSize='medium' className='icons' /></div>
              <div className="profile">Profile</div>
            </div></li>
         <div className="cartpart">
              <div className='cartIcon'><AddShoppingCartOutlinedIcon fontSize='medium' onClick={cartmai} /> </div>
              <div className="cart">Cart  { cart.length===1 ? 0 : cart.length-1}</div>
              
            </div> 
        </ul>
      </div>
    </header>
    <header className="header2">
      <ul className="items">
      <li onClick={() => handleNavigate('electronics')}>Electronics</li>
          <li onClick={() => handleNavigate('jewelery')}>Jewelery</li>
          <li onClick={() => handleNavigate("men's clothing")}>Men's</li>
          <li onClick={() => handleNavigate("women's clothing")}>Women's</li>
        
      </ul>
    </header>
  </div>
  );
};

export default Header;
