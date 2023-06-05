import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [ mobileNumber,  setmobileNumber] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        mobileNumber,
        password,
        
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred during registration');
    }
  };

  return (
    <div className='register'>
      <h2>Registration</h2>
      <TextField  id="outlined-basic" label="name" variant="outlined"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField  id="outlined-basic"  label="email" variant="outlined"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField   id="outlined-basic"  label="mobileNumber" variant="outlined"
        type="text"
        placeholder="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setmobileNumber(e.target.value)}
      />
      <TextField id="outlined-basic"  label="Password" variant="outlined"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button ></button>
      <Button onClick={handleRegistration} variant="contained" color="success">
      Register
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;



