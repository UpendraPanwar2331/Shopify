import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';

const Home = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return ( 
    <>
      <div className='home-container'>
    <div className='row'>
    {Products.map((item, index) => (
      <div className='col-3' key={item.id}>
        <div className='card'>
          <img src={item.image} className='card-img-top product-image-list' alt='...' />
          <div className='card-body'>
            <h5 className='card-title product-title-list'>{item.title}</h5>
            <p className='card-text product-description-list'>{item.description}</p>
            <h5 className='card-title'>{item.price}RS</h5>
            <Link to={`/productdetail/${item.id}`} className='btn btn-primary'>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  </div>
  </>
  );
};

export default Home;
