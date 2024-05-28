import React from 'react';
import api from '../../services/api';
import '../../style/ProductList.css'; // Import the CSS file

const ProductItem = ({ product, fetchProducts }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/api/products/${product.id}`);
      fetchProducts();
    } catch (error) {
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="product-item">
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
