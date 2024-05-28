import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import OrderItem from './OrderItem';
import AddOrder from './AddOrder';
import '../../style/OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      alert('Failed to fetch orders.');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      alert('Failed to fetch products.');
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  return (
    <div className="order-list">
      <h2>Order List</h2>
      <AddOrder fetchOrders={fetchOrders} products={products} />
      {orders?.map(order => (
        <OrderItem key={order.id} order={order} fetchOrders={fetchOrders} />
      ))}
    </div>
  );
};

export default OrderList;
