import { useEffect, useState } from "react";
import LatestReposStyle from "../CustomStyle.module.css";
import RepoBox from "./RepoBox";

const LatestRepos = ({data}) => {
  const [repos, setRepos] = useState([]);
  
  // useEffect(() => {
  //   if(repos == []){
  //     return
  //   }
  //   const fetchData = async (repos) => {
  //     const data = await fetch(`https://api.github.com/repos/${repos}`);
  //     const json = await data.json();
  //     await setRepos(json);
  //   }
  //   fetchData(repos)
  //   .catch(console.error);
  // }, [])

  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col-12">
                {/* {data} */}
              </div>
          </div>
      </div>
    </>
  )
}

export default LatestRepos