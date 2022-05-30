import { deleteUser } from '../../services/users';
import CreateUser from './components/createUser';

import styles from './users.module.scss';

const Users = ({ users, setUsers }) => {
  const handleDeleteUser = (event) => {
    const {
      target: { id },
    } = event;
    if (event.target.tagName === 'SPAN') {
      deleteUser(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p>Users:</p>
        <div>
          {users.map(({ id, name }, index) => (
            <p className={styles.user} key={id} id={id} onClick={handleDeleteUser}>
              {index + 1}) {name}{' '}
              <span id={id} className={styles.deleteUser}>
                Delete
              </span>
            </p>
          ))}
        </div>
      </div>

      <CreateUser users={users} setUsers={setUsers} />
    </div>
  );
};

export default Users;
