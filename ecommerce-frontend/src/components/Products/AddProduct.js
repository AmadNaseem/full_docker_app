import React, { useState } from 'react';
import api from '../../services/api';
import '../../style/ProductList.css'; // Import the CSS file

const AddProduct = ({ fetchProducts }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/products', { name, price });
      fetchProducts();
      setName('');
      setPrice('');
    } catch (error) {
      alert('Failed to add product.');
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
