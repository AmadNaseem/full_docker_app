import React from 'react';
import api from '../../services/api';
import '../../style/OrderList.css';

const OrderItem = ({ order, fetchOrders }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/api/orders/${order.id}`);
      fetchOrders();
    } catch (error) {
      alert('Failed to delete order.');
    }
  };

  return (
    <div className="order-item">
      <h3>Order ID: {order.id}</h3>
      <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
      <ul>
        {order?.products?.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.order_product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete Order</button>
    </div>
  );
};

export default OrderItem;
