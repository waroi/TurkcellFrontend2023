import React, { useState } from 'react'
import './App.css';
import Infos from './components/Infos/Infos';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';

import {getUser} from "./utils/Request"
import LastSearches from './components/LastSearches/LastSearches';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const[user,setUser]= useState();

  const fetchUser = async(userName)=>{
   const data =  await getUser(userName ? userName : searchTerm);
   setUser(data);
  }


  return (
    <div className="container">
      <Search fetchUser={fetchUser} searchTerm ={searchTerm} setSearchTerm={setSearchTerm}/>

    <div className={user === undefined && user?.message ==="Not Found" ? "wrap":"a" }>
  
        {user === undefined && <h2 className="searchUser">Search For Result</h2>}
        {user && user.message !=="Not Found" && <Infos user={user} fetchUser={fetchUser} />}
        {user?.message ==="Not Found" && <NotFound/>}
        {user === undefined  || user?.message ==="Not Found" ? <LastSearches fetchUser={fetchUser}/>:""}
    </div>
    


      
    </div>
  );
}

export default App;