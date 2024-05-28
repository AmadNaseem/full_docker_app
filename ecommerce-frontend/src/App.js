import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProductList from './components/Products/ProductList';
import OrderList from './components/Orders/OrderList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  // Function to determine if Navbar should be displayed
  const showNavbar = () => {
    return authenticated && location.pathname !== '/login' && location.pathname !== '/signup';
  };

  return (
    <div className="App">
      {showNavbar() && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={authenticated ? <ProductList /> : <Navigate to="/login" />} />
        <Route path="/orders" element={authenticated ? <OrderList /> : <Navigate to="/login" />} />
        <Route path="/" element={authenticated ? <Navigate to="/products" /> : <Navigate to="/login" />} />
      </Routes>
      {/* {authenticated && <Logout setAuthenticated={setAuthenticated} />} */}
    </div>
  );
}

export default App;
