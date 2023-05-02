import React from 'react';

const Product = ({ name, slug, category, image, price, countInStock, brand, rating, numReviews, description }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="product-details">
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating} stars ({numReviews} reviews)</p>
          <p>Count in Stock: {countInStock}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;