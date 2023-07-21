import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../CSS/productdetail.css';

import { AddShoppingCart, Payment } from '@mui/icons-material';
import { Alert, Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart, login } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct((prevProduct) => ({ ...prevProduct, ...data })))
      .catch((error) => console.log(error));
  }, );

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      window.alert('Please select a size before adding to cart.');
      return;
    }
  
    addToCart({ ...product, size: selectedSize });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    window.alert('Product is added to the cart');
    navigate('/');
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      window.alert('Please select a size before buying.');
      return;
    }
  
    if (login) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <img src={product.image} alt='hdfd' className='imageofdetails' />
          <div className='buttons' style={{ marginLeft: '206px' }}>
            <Button
              onClick={handleAddToCart}
              variant='outlinedst'
              startIcon={<AddShoppingCart />}
              style={{ border: '1px solid rgb(159, 32, 137)', color: 'rgb(159, 32, 137)' }}
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              variant='contained'
              startIcon={<Payment />}
              style={{ backgroundColor: 'rgb(159, 32, 137)', marginLeft: '39px' }}
            >
              Buy Now
            </Button>
          </div>
        </div>

        <div className='col-6'>
          <div className='product-info'>
            <div className='titleorprice'>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '165px' }} className='product-title'>
                {product.title}
              </h2>
              <h4 className='product-price'>RS-{product.price}</h4>
              {product.rating && (
                <h4 className='rating2' style={{ fontSize: '18px', marginTop: '24px' }}>
                  {product.rating.rate}
                </h4>
              )}
            </div>

            <div className='borderline'></div>

            <div className='detailtitile'>
              <div className='productDisName'></div>
              <p className='detaildescription' style={{ fontSize: '16px', marginBottom: '10px', color: 'black' }}>
                <h2>Product Details</h2>
                <br></br>
                {product.description}
              </p>

              <div className='size-selection'>
                <h2 className='headings' style={{ fontSize: '30px', color: 'black' }}>
                  Select Size:
                </h2>
                <RadioGroup  value={selectedSize} onChange={handleSizeChange} className='radio-group'>
                  <FormControlLabel value='S' control={<Radio />} label='S' />
                  <FormControlLabel value='M' control={<Radio />} label='M' />
                  <FormControlLabel value='L' control={<Radio />} label='L' />
                  <FormControlLabel value='XL' control={<Radio />} label='XL' />
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {alert &&
      <div
      className="alert-container"
      style={{
        position: 'fixed',
        width: '300px',
        bottom: '44px',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyItems: 'center',
      }}
    >
      <Alert
        severity="success"
        color="info"
        className="alert-box"
        style={{
          backgroundColor: 'black',
          width: '230px',
          justifyItems: 'center',
          color: 'white',
          borderRadius: '10px',
          fontSize: '15px',
          opacity: 1,
        }}
      >
        Product is added to cart
      </Alert>
    </div>
    
}
  
      
    </>
  );
};

export default ProductDetail;
