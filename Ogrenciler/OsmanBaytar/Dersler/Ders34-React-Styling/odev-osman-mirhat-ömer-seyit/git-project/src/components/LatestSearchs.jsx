import LatestSearchsStyle from "../CustomStyle.module.css";
import SearchBox from "./SearchBox";

const LatestSearchs = ({data}) => {

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">{data}</div>
        </div>
    </div>
  )
}

export default LatestSearchs