import Header from '../components/header';
import UserInfo from '../components/userInfo';
import UserRepo from '../components/userRepo';
import Fetch from '../models/Fetch';
import { useEffect, useState } from 'react';

function App() {
 const [user, setUser] = useState('');
 const [latestSearch, setLatestSearch] = useState([]);

 const [repo, setRepo] = useState([]);
 const [userInfo, setUserInfo] = useState({});

 useEffect(() => {
  const fetch = new Fetch();
  setLatestSearch(fetch.getLatestSearch());
 }, []);
 useEffect(() => {
  if (!user) return;
  const fetch = new Fetch();
  fetch.getUser(user).then((data) => {
   const { repo: repos, user: userInfos } = data;
   setRepo(repos);
   setUserInfo(userInfos);
  });
  fetch.setLatestSearch(user);
  setLatestSearch(fetch.getLatestSearch());
 }, [user]);
 return (
  <>
   <div>
    <Header setUser={setUser} latestSearch={latestSearch} />
   </div>
   <div>
    <UserInfo userInfo={userInfo} />
    <UserRepo repo={repo} />
   </div>
  </>
 );
}

export default App;
