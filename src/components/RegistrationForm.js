import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="mobileNumber"
        value={mobileNumber}
        onChange={(e) => setmobileNumber(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;



