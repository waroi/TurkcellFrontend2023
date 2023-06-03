
import style from './App.module.css'
import { useState,useEffect } from 'react'
import SearchNav from './components/SearchNav/SearchNav'
import UserInfos from './components/UserInfos/UserInfos'


function App() {
 
  const [user, setUser] = useState([])
  const [currentUser ,setCurUser]=useState([])

  
  useEffect(()=>{
    
    
  },[currentUser])
  

  return (
    <>
    <div className={style.container}>
     <div className={`${style.dgrid}`}>
      <div className={`${style.searchGrid}`}>
        <SearchNav user={currentUser} setUser={setUser} setCurUser={setCurUser} />
      </div>
      <div className={`${style.userDetailGrid}`}>
        <UserInfos user={[currentUser]} />
      </div>
    </div>
    </div>
  

    

    
    
      
    </>
  )
}

export default App
