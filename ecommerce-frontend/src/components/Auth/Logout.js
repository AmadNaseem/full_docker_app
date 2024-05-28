import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/Logout.css'

function Logout({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
