import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { getLocalStorage } from '../../utils/localStorage'
const LastSearches = ({fetchUser}) => {
  const [lastUser, setLastUser] = useState()


  useEffect(() => {
  setLastUser(getLocalStorage()) 
  }, [fetchUser])
  return (

    <div className={styles.card}>
      <div className={styles.cardHeader}>
        Latest Searches
      </div>
  <ul className={styles.listGroup}>
  {lastUser?.map((user)=>{
        return (<li key={user} onClick={()=>fetchUser(user)} className={styles.listGroupItem}>{user}</li>)})
    }
    <button className={styles.deleteButton} onClick={()=>{
      localStorage.clear();
      setLastUser([])
      }}>Clear All Latest Searches</button>
  </ul>
</div>

    
   
  )
}

export default LastSearches