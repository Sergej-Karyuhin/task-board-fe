import { useState } from 'react';
import { deleteUser } from '../../services/users';
import { CreateUser, UpdateUser } from './components/createUser';

import styles from './users.module.scss';

const Users = ({ users, setUsers }) => {
  const [userForUpdate, setUserForUpdate] = useState();

  const qqq = (event) => {
    const {
      currentTarget: { id },
    } = event;

    if (event.target.id.startsWith('delete__')) {
      deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }

    if (event.target.id.startsWith('update__')) {
      const qqq = users.find((user) => user.id === id);
      setUserForUpdate(qqq);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Users:</p>
        <div>
          {users.map(({ id, name }, index) => (
            <p className={styles.user} key={id} id={id} onClick={qqq}>
              {index + 1}) {name}{' '}
              <span id={`delete__${id}`} className={styles.deleteUser}>
                Delete
              </span>
              <span id={`update__${id}`} className={styles.updateUser}>
                Update
              </span>
            </p>
          ))}
        </div>
      </div>

      <UpdateUser users={users} setUsers={setUsers} userForUpdate={userForUpdate} setUserForUpdate={setUserForUpdate} />
      <CreateUser users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
