import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import '../../style/ProductList.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      alert('Failed to fetch products.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <AddProduct fetchProducts={fetchProducts} />
      {products.map((product) => (
        <ProductItem key={product.id} product={product} fetchProducts={fetchProducts} />
      ))}
    </div>
  );
};

export default ProductList;
