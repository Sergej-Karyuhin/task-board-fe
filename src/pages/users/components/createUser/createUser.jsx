import { useState } from 'react';
import { createUser } from '../../../../services/users';

import styles from './createUser.module.scss';

const CreateUser = ({ users, setUsers }) => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    createUser({ name, login, password }).then((user) => setUsers([...users, user]));
    setName('');
    setLogin('');
    setPassword('');
    event.preventDefault();
  };

  return (
    <div>
      <p>Create user:</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className={styles.label}>
          Login:
          <input
            type="text"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateUser;
