import React, { useState, useEffect } from 'react';

import './CSS/Home.css';

import { useNavigate } from 'react-router-dom';
import  main from './Images/main.png'
import products from './Images/products.png'
import essential from './Images/essential.png'
import homepic from './Images/homepic.png'
import homepic3 from './Images/homepic3.png';
import signup from './Images/signup.png';


const Home = () => {
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productDetails = (id) =>{
    navigate(`/productdetail/${id}`)
 }

  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return ( 
    <>
    
      <div className="flexbox">
     
      <div className="main">
          <img src={main}  alt="logoo" />
        </div>
        <div className='topcatetitle'>
        <div className='strLine'></div>
        <span className='choosefrom'>Top Category to Choose From</span>
        <div className='strLine'></div>
        </div>
        <div className="pro">
          <img src={products} className='photo'   alt="logoo" />
        </div>
        <div className="pro">
          <img src={essential} className='photo'   alt="eimage" />
        </div>
        <div className="pro">
          <img src={homepic} className='photo'   alt="homeimage" />
        </div>
        <div className="pro">
          <img src={homepic3} className='photo'  alt="homeimage3" />
        </div>
        <div className="signup">
          <img src={signup}  alt="signup" />
        </div>
       
        {Products.map((product) => (
         
             <div key={product.id} className="cards" onClick={() => productDetails(product.id)}>
              <img src={product.image} alt='hdhdh' />
              <p className='card-title product-title-list' style={{ textDecoration: 'none' }} >{product.title}</p>
              <h3>₹{product.price}<span className='onwards'>onwards</span> </h3>
              <div className='free'>free delivery</div><br></br>
              <div className="rating-container">
                {product.rating.rate} 
              </div>
              <span className="rating-count">
              &nbsp;&nbsp;{product.rating.count} Reviews
              </span>
            </div>
       
        ))}
      </div>
    </>
  );
};

export default Home;
