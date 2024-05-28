// import React, { useState } from 'react';
// import api from '../../services/api';
// import '../../style/Login.css'; // Import the CSS file

// const Login = ({ setAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post('/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       setAuthenticated(true);
//     } catch (error) {
//       alert('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../style/Auth.css';

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setAuthenticated(true);
      // Redirect to /products page after successful login
      navigate('/products');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
