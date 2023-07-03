import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../CSS/productdetail.css'
import { purple } from '@mui/material/colors';

import { AddShoppingCart, Payment } from '@mui/icons-material';
import { Button } from '@mui/material';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct((prevProduct) => ({ ...prevProduct, ...data })))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
    window.alert('Added into cart');
    navigate('/');
  };

  const handelbuynow = () => {
    navigate('/checkout');
  };

  return (
    <>
    <div className='row'>
     <div className='col-6'>
          <img src={product.image} alt='hdfd' className='imageofdetails' />
          {/* <div className='bothbuttons'>
        <button onClick={handleAddToCart} className=' cartbutton ' style={{ fontSize: '20px',color:'purple',height:'44px',  padding: '5px 40px', marginRight: '10px' }}>
            Add to Cart
          </button>
          <button onClick={handelbuynow} className=' buybutton' style={{ fontSize: '20px', textDecoration:purple, padding: '5px 40px' }}>
            Buy Now
          </button>
          </div> */}
            <div className="buttons">
              <button className='button1' onClick={handleAddToCart} variant="outlinedst" startIcon={<AddShoppingCart />} style={{ border: '1px solid rgb(159, 32, 137)', color: 'rgb(159, 32, 137)',marginRight:"20px" }}>
                Add to Cart
              </button>
              <button variant="contained" className='button2' onClick={handelbuynow} startIcon={<Payment />} style={{ backgroundColor: 'rgb(159, 32, 137)' }}>
                Buy Now
              </button>
            </div>




          </div>

        <div className='col-6'>
        <div className="product-info">
          <div className='titleorprice'>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '165px' }} className='product-title'>{product.title}</h2>
          <h4 className="product-price">RS-{product.price}</h4>
           
             {product.rating && (
            <h4 className='rating2' style={{ fontSize: '18px', marginTop: '24px' }}>
              {product.rating.rate}
            </h4>
          )}



          {/* <div className="rating-container2">
                {product.rating.rate}
              </div>
              <span className="rating-count2">
              &nbsp;&nbsp;{product.rating.count} Reviews
              </span> */}
              
          </div>
 
          <div className='borderline'></div>

        <div className='detailtitile'>
        <div className="productDisName"></div>
        
          <p className='detaildescription' style={{ fontSize: '16px', marginBottom: '10px',color:'black' }}><h2>Product Details</h2><br></br>{product.description}</p>
         
        
            <div className="size-selection">
              <h2 className="headings" style={{ fontSize: '30px', color:'black'}} >Select Size:</h2>
              <div className="radio-group">
                <label>
                  <input type="radio" name="size" value="S" />
                  S
                </label>
                <label>
                  <input type="radio" name="size" value="M" />
                  M
                </label>
                <label>
                  <input type="radio" name="size" value="L" />
                  L
                </label>
                <label>
                  <input type="radio" name="size" value="XL" />
                  XL
                </label>
              </div>
            </div>
        
       
    </div>
        </div>





</div>

        </div>
   




    


    </>
  );
};

export default ProductDetail;
