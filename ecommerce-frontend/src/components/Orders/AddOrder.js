import React, { useState } from 'react';
import api from '../../services/api';
import '../../style/OrderList.css';

const AddOrder = ({ fetchOrders, products }) => {
  const [orderItems, setOrderItems] = useState([{ productId: '', quantity: 1 }]);

  const handleChange = (index, field, value) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index][field] = value;
    setOrderItems(newOrderItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/orders', { products: orderItems });
      fetchOrders();
      setOrderItems([{ productId: '', quantity: 1 }]);
    } catch (error) {
      alert('Failed to add order.');
    }
  };

  return (
    <div className="add-order">
      <h2>Add Order</h2>
      <form onSubmit={handleSubmit}>
        {orderItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <select value={item.productId} onChange={(e) => handleChange(index, 'productId', e.target.value)} required>
              <option value="">Select Product</option>
              {products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
            <input type="number" value={item.quantity} onChange={(e) => handleChange(index, 'quantity', e.target.value)} min="1" required />
          </div>
        ))}
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default AddOrder;
