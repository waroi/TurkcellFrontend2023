import Header from '../components/header';
import Loading from '../components/loading';
import UserInfo from '../components/userInfo';
import UserRepo from '../components/userRepo';
import Fetch from '../models/Fetch';
import style from './appStyle.module.css';
import { useEffect, useState } from 'react';

function App() {
 const [user, setUser] = useState("");
 const [latestSearch, setLatestSearch] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);

 const [repo, setRepo] = useState([]);
 const [userInfo, setUserInfo] = useState({});

 useEffect(() => {
  const fetch = new Fetch();
  setLatestSearch(fetch.getLatestSearch());
 }, []);

 useEffect(() => {
  setRepo([]);
  setUserInfo({});
  if (!user) return;
  // eslint-disable-next-line no-unused-vars
  let ignore = false;
  
  const fetch = new Fetch();
  setLoading(true);
  setTimeout(() => {
   fetch.getUser(user).then((data) => {
     if(data == "404"){ 
      setLoading(false);
      setError(true);
      return;
     }
     setError(false);
    const { repo: repos, user: userInfos } = data;
    userInfos && setUserInfo(userInfos)
    repos && setRepo(repos);
    setLoading(false);
   });
  }, 500);

  fetch.setLatestSearch(user);
  setLatestSearch(fetch.getLatestSearch());
  return () => {
   ignore = true;
  };
 }, [user]);

 return (
  <div className={style.body}>
   {
    userInfo.name
    ? <div className={style.text}>
    {userInfo.name}
   </div>
   : <div className={style.text}>
   MÜCAHİT<br/>EGE<br/>OĞULCAN
   </div>
   }

    <div className={style.main}>
      <h1 className={style}>Github Cubun</h1>
    <Header className={style.header} setLatestSearch={setLatestSearch} setUser={setUser} latestSearch={latestSearch} />
    
    {
      loading ?  <Loading />:(
        error ? <div className={style.error}>Kullanıcı Bulunamadı</div>
        :(
         <div className={style.container}>
          {user &&  <UserInfo  userInfo={userInfo} />}
          {repo && <UserRepo repo={repo} />}
         </div>
        )
        
      )}
    
    </div>

  </div>
 );
}

export default App;
