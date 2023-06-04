import { useState, useEffect } from "react"
import SingleRepo from "../SingleRepo/SingleRepo"
import PropTypes from 'prop-types'

const AllRepos = ({searchValue}) => {
  const [allRepos, setAllRepos] = useState({})

  useEffect(() => {
    const getRepos = async() => {
      const response = await fetch(`https://api.github.com/users/${searchValue}/repos`);
      const data = await response.json();
      setAllRepos(data);
    }
    getRepos();
  }, [searchValue])
  return (
    <div>
      <h3>Repo Adı</h3>
      <p>Repo Açıklaması</p>
      <p>Repo Oluşturma Zamanı</p>
      <p>Repo Güncelleme Zamanı</p>
      <SingleRepo />
    </div>
  )
}

AllRepos.propTypes = {
  searchValue: PropTypes.string.isRequired
}

export default AllRepos