import LatestReposStyle from "../CustomStyle.module.css";
import RepoBox from "./RepoBox";

const LatestRepos = ({data}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
              {data}
            </div>
        </div>
    </div>
  )
}

export default LatestRepos