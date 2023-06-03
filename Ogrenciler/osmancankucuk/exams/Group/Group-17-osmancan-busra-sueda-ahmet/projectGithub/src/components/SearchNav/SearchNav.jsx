import style from "./SearchNav.module.css"
import { getUsers } from "../../utilities/Api"
import { useState,useEffect } from "react"
const SearchNav = ({ setCurUser}) => {
    
    const [search,setSearch]=useState("")
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
        }
      }, []);
      console.log(items)
    
    function getUsersFromApi(e){
   
    getUsers(search).then((resp)=>{
        console.log(resp.login)
     
        if(resp.login){
            setCurUser(getUsers(search))
            localStorage.setItem("items",JSON.stringify(search))
            
        }
        else{
            alert("There is no user with that text")
        }
        
    })
    .catch((err)=>console.log(err))
    
    

    
 

        e.preventDefault()
    }
  return (
    <div>
        <form className={style.searchForm} onSubmit={getUsersFromApi}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
            <button type="submit"  className={style.searchButton}>Search</button>
        </form>
        <div>
            {/* Latest searching */}
        </div>


    </div>
  )
}

export default SearchNav