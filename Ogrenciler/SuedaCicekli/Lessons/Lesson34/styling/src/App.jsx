// import { useState } from 'react'
import './App.css'
import styles from './CustomStyle.module.css'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState('')
  const API_URL = 'https://api.github.com/';
  const [user, setUser] = useState('');
  const [latestSearch, setLatestSearch] = useState([]);

  const handleSearch = () => {
    gethUser(search)
    setLatestSearch([...latestSearch, search])
    setSearch('')
  }

  const gethUser = (searchParam) => {
    fetch(API_URL + 'users/' + searchParam)
      .then((response) => response.json())
      .then((data) => {
        setUser(data)

      })
  }


  console.log(latestSearch)

  const searchUser = (searchParam) => {
    fetch(API_URL + 'search/users?q=' + searchParam)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }



  return (
    <>
      {/* <h1 className='title'>Styling</h1>
      <button className={styles.customButton}>Bana Tıkla</button> */}

      <div className={styles.dflex}>
        <input value={search} type="text" className={styles.customInput} onChange={(e) => setSearch(e.target.value)} />
        <button className={styles.customButton} onClick={handleSearch} >Ara</button>
      </div>

      <h2>Latest Search</h2>

      <h2>Search Result</h2>
      <h3>Followers</h3>
      <p>{user.followers}</p>
      <img src={user.avatar_url} alt="" />


      <ul>
        {latestSearch.map((item, index) => {
          return <li key={index}>{item}</li> //latestSearch değişkenindeki elemanları listeliyoruz
        })}
      </ul>
    </>
  )
}

export default App
