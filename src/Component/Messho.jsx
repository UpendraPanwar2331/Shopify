import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Messho = () => {
  const [Products, setProducts] = useState([]);
  const { inputValue } = useContext(CartContext);
  const navigate = useNavigate();

  const filtered = inputValue
    ? Products.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    : Products;

  const productDetails = (id) => {
    navigate(`/productdetail/${id}`);
  };

  useEffect(() => {
    fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="flexbox">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="cards"
            onClick={() => productDetails(product.id)}
          >
            <img src={product.image} alt="hdhdh" />
            <p className="card-title product-title-list" style={{ textDecoration: 'none' }}>
              {product.title}
            </p>
            <h3>
              ₹{product.price}
              <span className="onwards">onwards</span>
            </h3>
            <div className="free">free delivery</div>
            <br></br>
            <div className="rating-container">{product.rating.rate}</div>
            <span className="rating-count">&nbsp;&nbsp;{product.rating.count} Reviews</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Messho;
