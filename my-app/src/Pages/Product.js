import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Components/content';

function Products() {
  const { category } = useParams();
  let products;

  if (category) {
    products = productData.filter(product => product.title === category);
  } else {
    products = productData;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.text}</p>
          <img src={product.img} alt={product.title} />
          {/* ... other product data ... */}
        </div>
      ))}
    </div>
  );
}

export default Products;
