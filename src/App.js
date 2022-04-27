import { useState, useEffect } from 'react';
import { getAllUsers } from './services/users';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data));    
  }, []);
  
  return (
    <div className='app'>
     <p>Users:</p>
     <div>
       {users.map(({ id, name }, index) => (
         <p key={id}>{index + 1}) {name}</p>
       ))}
     </div>
    </div>
  );
};

export default App;
