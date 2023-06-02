import RepoBoxStyle from "../CustomStyle.module.css";

const RepoBox = () => {
  return (
    <div className="row">
        <div className="col-6">Username</div>
        <div className="col-6">
            <span className={RepoBoxStyle.repoBoxSpan}>Stars</span>
            <span className={RepoBoxStyle.repoBoxSpan}>Forks</span>
        </div>
    </div>
  )
}

export default RepoBox