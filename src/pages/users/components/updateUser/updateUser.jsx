import { updateUser } from '../../../../services/users';

import styles from './updateUser.module.scss';

const UpdateUser = ({
  users,
  setUsers,
  userForUpdate,
  setUserForUpdate,
  isShowUpdateUser,
  setIsShowUpdateUser,
}) => {
  const onSubmit = (event) => {
    const qqq = (user) => {
      const q = users.filter((item) => item.id !== user.id);
      const w = { id: user.id, name: user.name, login: user.login };
      setUsers([...q, w]);
      setUserForUpdate(w);
    };
    updateUser(userForUpdate).then(qqq);
    setIsShowUpdateUser(false);
    event.preventDefault();
  };

  return (
    isShowUpdateUser && (
      <div>
        <p>Update user:</p>

        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            Name:
            <input
              type="text"
              value={userForUpdate?.name ?? ''}
              onChange={(event) =>
                setUserForUpdate({ ...userForUpdate, ...{ name: event.target.value } })
              }
            />
          </label>

          <label className={styles.label}>
            Login:
            <input
              type="text"
              value={userForUpdate?.login ?? ''}
              onChange={(event) =>
                setUserForUpdate({ ...userForUpdate, ...{ login: event.target.value } })
              }
            />
          </label>

          <label className={styles.label}>
            Password:
            <input
              type="password"
              value={userForUpdate?.password ?? ''}
              onChange={(event) =>
                setUserForUpdate({
                  ...userForUpdate,
                  ...{ password: event.target.value },
                })
              }
              required
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  );
};

export default UpdateUser;
