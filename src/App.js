import { useState, useEffect } from 'react';
import { getAllUsers } from './services/users';
import Users from './pages/users';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return <Users users={users} setUsers={setUsers} />;
};

export default App;
