import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [page, limit, search]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getUser', {
        params: { page, limit, search }
      });
      const { data, total } = response.data;
      setUsers(data);
      setTotal(total);
    } catch (error) {
      setMessage('An error occurred while fetching users');
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLike = (userId) => {
    // Implement your like functionality here
    console.log(`Liked user with ID: ${userId}`);
  };

  const handleDislike = (userId) => {
    // Implement your dislike functionality here
    console.log(`Disliked user with ID: ${userId}`);
  };

  return (
    <div>
      <h2>User List</h2>
      <TextField id="filled-basic" label="Search" variant="filled"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.mobileNumber}</p>
          <button onClick={() => handleLike(user._id)}>Like</button>
          <button onClick={() => handleDislike(user._id)}>Dislike</button>
        </div>
      ))}
      {message && <p>{message}</p>}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
           Previous
          <ArrowBackIosIcon />
        </button>
        <span>{page}</span>
        <button disabled={limit * page >= total} onClick={() => setPage(page + 1)}>
          Next
          <ArrowForwardIosIcon/>
        </button>
      </div>
    </div>
  );
};

export default UserListScreen;
