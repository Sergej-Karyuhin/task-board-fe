import { memo } from 'react';
import { deleteUser } from '../../../../services/users';

import styles from './userList.module.scss';

const UserList = ({ users, setUsers, setUserForUpdate, setIsShowUpdateUser }) => {
  const onUserClick = (event) => {
    const {
      currentTarget: { id },
    } = event;

    if (event.target.id.startsWith('delete__')) {
      deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }

    if (event.target.id.startsWith('update__')) {
      setIsShowUpdateUser(true);
      const userForUpdate = users.find((user) => user.id === id);
      setUserForUpdate(userForUpdate);
    }
  };

  return (
    <div>
      <p>Users:</p>
      <div>
        {users.map(({ id, name }, index) => (
          <p className={styles.user} key={id} id={id} onClick={onUserClick}>
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
  );
};

export default memo(UserList);
