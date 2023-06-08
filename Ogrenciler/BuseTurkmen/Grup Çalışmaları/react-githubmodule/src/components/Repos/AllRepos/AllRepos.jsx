import { useState, useEffect } from "react"
import SingleRepo from "../SingleRepo/SingleRepo"
import PropTypes from 'prop-types'
import styles from '../Repos.module.css'

const AllRepos = ({userName4Repos}) => {
  const [allRepos, setAllRepos] = useState([])

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${userName4Repos}/repos`)
      const data = await response.json();
      const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      const latestRepos = sortedRepos.slice(0, 6);
      setAllRepos(latestRepos);
    }
    if(userName4Repos !== '') {
      getRepos();
    }
  }, [userName4Repos])
  
  return (
    <div className={styles.allreposDiv}>
      {
        allRepos.map((repo) => (
          <SingleRepo key={repo.id} repo={repo}/>
        ))
      }
    </div>
  )
}

AllRepos.propTypes = {
  userName4Repos: PropTypes.string
}

export default AllRepos