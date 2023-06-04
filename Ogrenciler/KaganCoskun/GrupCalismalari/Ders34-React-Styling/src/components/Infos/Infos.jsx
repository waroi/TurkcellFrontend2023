
import styles from "./style.module.css"
import PersonalInformations from '../PersonalInformations/PersonalInformations';
import Repo from '../Repos/Repo';
import { getUserRepos } from '../../utils/Request'
import { useEffect, useState } from 'react'

const Infos = ({user,fetchUser}) => {

  const[userRepos,setUserRepos]= useState();
  const [loadMore, setLoadMore] = useState(false);



  useEffect(()=>{
    async function fetchRepos(){
      const repo = await getUserRepos(user.login);
      setUserRepos(repo);    
    }
    fetchRepos();    
  },[user])

  return (
    <div className={styles.infoWrap}>

      <div className={styles.leftSide}>
        <h2 className={styles.userTitle}>Hi! IAm {user?.name} <span className={styles.hireMe}>{user.login==="waroi"?"HIRING":"HIRE ME"}</span> </h2>
        <p>{user?.bio}</p>
        {user?.email &&<p><i className="fa-solid fa-envelope"></i> {user?.email}</p>}
        {user?.location &&<p><i className="fa-solid fa-location-dot"></i> {user?.location}</p>}
        {user?.blog &&<p><i className="fa-solid fa-envelope"></i> {user?.blog}</p>}

      
        <div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
                Repolar
            </div>
            <ul className={styles.listGroup}>
              {user&& (loadMore ? userRepos : userRepos?.slice(0, 5))?.map((repo)=>
              <li className={styles.listGroupItem} key={repo.id}><Repo  repo={repo}/></li>)} 
            </ul>
        </div>
          <button className={styles.loadMoreBtn} onClick={()=>setLoadMore(!loadMore)}>{loadMore?"Load Less":"Load More"}</button>
        </div>
        </div>
      <div className={styles.rightSide}>
         <PersonalInformations user={user} fetchUser={fetchUser} />
         </div>
   
    
    
    </div>
  )
}
export default Infos