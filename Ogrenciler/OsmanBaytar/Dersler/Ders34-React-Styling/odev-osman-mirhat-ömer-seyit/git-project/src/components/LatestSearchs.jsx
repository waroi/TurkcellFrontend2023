import LatestSearchsStyle from "../CustomStyle.module.css";
import SearchBox from "./SearchBox";

const LatestSearchs = ({data,username}) => {
  const uniqueData = [...new Set(data)];

  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-12">
              <h5>Latest Searchs</h5>
              <div id="latestArea" className={LatestSearchsStyle.ulList}>
              {
                 uniqueData.slice(-5).map((item) => (
                  <div key={item}>
                    <button className={`${LatestSearchsStyle.latestSearchBtn}`} value={item}>{item}</button>
                  </div>
                )) 
              }
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LatestSearchs