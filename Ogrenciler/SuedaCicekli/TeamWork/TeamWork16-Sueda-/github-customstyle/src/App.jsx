
import Search from './components/search/search';
import UserDetail from './components/userDetail/userDetail';
import styles from './appCustom.module.css';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState()

  console.log(user)

  return (
    <div className={`${styles.dgrid} container`}>
      <div className={`${styles.searchGrid}`}>
        <Search setUser={setUser} />
      </div>
      <div className={`${styles.userDetailGrid}`}>
        <UserDetail user={user} />
      </div>
    </div>
  );
}

export default App;
