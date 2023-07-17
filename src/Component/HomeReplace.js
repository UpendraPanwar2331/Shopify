import React, { useEffect, useState } from 'react'
import { ProductData } from '../data';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';

const HomeReplace = () => {
    const [products, setProducts] = useState([]);  
  const navigate = useNavigate();
  const temp = useParams();
  const { category } = temp;
  const filteredProducts = ProductData.filter((product) => product.category === category);

 
  const callApi = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    
    const data = await response.json();
    console.log("hagaga",data)
    setProducts(data)

  }
  useEffect(() => {
    callApi(category);
  }, [category])

    const productDetails = (id) =>{
        navigate(`/productdetail/${id}`)
     }
  return (
    <div style={{padding:"172px"}}>
    
    {/* <div className='row'>
      {
        products && products.map((item, index) => (
          <div className='col-3' key={item.id}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top product-image-list" alt="..." />
              <div className="card-body">
                <h5 className="card-title product-title-list">{item.title}</h5>
                <p className="card-text product-description-list">{item.description}</p>
                <h5 className="card-title">{item.price}RS</h5>
                <Link to={`/product/${item.id}`} className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div> */}
       <div className="flexbox">
      {products.map((product) => (
        <div key={product.id} className="cards"  onClick={() => productDetails(product.id)}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <div className="rating-container">
            <Rating
              name={`rating-${product.id}`}
              value={product.rating}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomeReplace
