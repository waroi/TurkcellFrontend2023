import {useState} from 'react'
import Person from '../Person/Person';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [datas, setDatas] = useState([])

  const getGithubValue = async () => {
    const response = await fetch(`https://api.github.com/users/${searchValue}`)
    const data = await response.json()
    setDatas(data)
  }
    
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)}/>
        <button type='button' onClick={getGithubValue}>Ara</button>
        {console.log(datas)}
      </div>

      <Person />
    </>
  )
}

export default Search
