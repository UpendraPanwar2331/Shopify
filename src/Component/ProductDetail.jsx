import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../CartContext'
import { useNavigate } from 'react-router-dom';

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
    window.alert("added into cart")
    navigate('/');


  };

  return (
    <div>
      i m product detail

      <div className='row'>
        <div className='col-6'>
          <img src={product.image} alt='hdfd' />
          <h5>{product.title}</h5>
          <p>{product.description}</p>

       <button onClick={handleAddToCart}>Add Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
