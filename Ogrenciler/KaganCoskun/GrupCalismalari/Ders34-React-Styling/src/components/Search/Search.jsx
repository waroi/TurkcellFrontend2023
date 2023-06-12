import styles from "./style.module.css"

const Search = ({searchTerm,setSearchTerm,fetchUser}) => {
  return (
    <div className={styles.searchWrap}>
      <div className={styles.inputWrap}>
      <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} className={styles.searchInput} placeholder='Github User Name' id='searchInput' type="text" />
      </div>
      <button onClick={()=>fetchUser()} className={styles.searchButton}>Search</button>
    </div>
  )
}

export default Search;
