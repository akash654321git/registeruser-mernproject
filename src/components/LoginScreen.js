import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Button from '@mui/material/Button';
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred during login');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <TextField id="outlined-basic"  label="email" variant="outlined"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField  id="outlined-basic"  label="Password" variant="outlined"
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Button onClick={handleLogin} aria-label="fingerprint" variant="contained" color="success">
      <Fingerprint />
       Login
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginScreen;
