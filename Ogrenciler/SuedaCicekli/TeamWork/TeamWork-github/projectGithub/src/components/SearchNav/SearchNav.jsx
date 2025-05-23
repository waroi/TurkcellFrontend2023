import { getUsers } from "../../utilities/Api"
import { useState, useEffect } from "react"
import style from "./SearchNav.module.css"
import LogoImg from '../../assets/logo/soab.png'

const SearchNav = ({ setCurUser }) => {


  const [search, setSearch] = useState("")
  const [items, setItems] = useState([]);


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'))
    if (storedItems) {
      setItems(storedItems)
    }
  }, []);
  console.log(items)



  function getUsersFromApi(e) {
    e.preventDefault()

    getUsers(search)
      .then(resp => {
        if (resp.login) {
          setCurUser(getUsers(search))
          const storedItems = JSON.parse(localStorage.getItem('items')) || []
          console.log(storedItems.length)
          if (storedItems.length >= 5) {
            storedItems.shift()
          }
          let cur = storedItems.find((item) => item === search)
          if (cur) {
            alert("Bu kullanici zaten var")
          }
          else {
            const updatedItems = [...storedItems, search]
            localStorage.setItem("items", JSON.stringify(updatedItems))
            setItems(updatedItems)
          }



        } else {
          alert("There is no user with that text")
        }
      })
      .catch(err => console.log(err))
  }
  function getUserFromLatest(user) {
    // getUsers(user).then(res=>User Detail e yollayacagiz )

  }
  return (
    <div>
      <form className={style.searchForm} onSubmit={getUsersFromApi}>
        <div className={style.logoArea}> <img src={LogoImg} alt="LogoSoab" className={style.logo} /></div>
        <div className={` ${style.inputArea} `}>
          <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className={style.searchInput} />
          <button type="submit" className={style.searchButton}>Search</button>
        </div>
      </form>

      {items.slice(-5).map((item, i) => (
        <button className={style.latestButton} onClick={() => getUserFromLatest(item)} key={i}>{item}</button>
      ))}



    </div>
  )
}

export default SearchNav