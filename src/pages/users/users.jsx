import { useState } from 'react';
import UserList from './components/userList';
import CreateUser from './components/createUser';
import UpdateUser from './components/updateUser';

import styles from './users.module.scss';

const Users = (props) => {
  const [userForUpdate, setUserForUpdate] = useState();
  const [isShowUpdateUser, setIsShowUpdateUser] = useState(false);

  return (
    <div className={styles.container}>
      <UserList
        {...props}
        setUserForUpdate={setUserForUpdate}
        setIsShowUpdateUser={setIsShowUpdateUser}
      />
      <UpdateUser
        {...props}
        userForUpdate={userForUpdate}
        setUserForUpdate={setUserForUpdate}
        isShowUpdateUser={isShowUpdateUser}
        setIsShowUpdateUser={setIsShowUpdateUser}
      />
      <CreateUser {...props} />
    </div>
  );
};

export default Users;
