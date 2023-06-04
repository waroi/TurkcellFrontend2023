import { useEffect, useState } from "react";
import LatestReposStyle from "../CustomStyle.module.css";


const LatestRepos = ({ data }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reposUrl = await data.repos_url;
      const res = await fetch(reposUrl);
      const json = await res.json();
      await setRepos(json);
    }
    fetchData()
      .catch(console.error);

  }, [data])

  return (
    <>
      <div>
        <div className="row">
          {
            data.name ? repos && repos.slice(0, 3).map((item, index) => (
              <div className={`${LatestReposStyle.repoAreaParent} col-lg-4`} key={index}>
                <div className={`${LatestReposStyle.repoArea}`}>
                    <h4>Repo Name: {item.name} </h4>
                  <div className={LatestReposStyle.repoInfoArea}>
                    <h6>Forks: {item.forks} </h6>
                    <h6>Stars: {item.stargazers_count} </h6>
                    <h6>Watchers: {item.watchers} </h6>
                    <h6>Language: {item.language ? item.language : "Not Found"}</h6>
                  </div>
                </div>
              </div>
            )) : <div>

            </div>
          }
        </div>
      </div>
    </>
  )
}

export default LatestRepos