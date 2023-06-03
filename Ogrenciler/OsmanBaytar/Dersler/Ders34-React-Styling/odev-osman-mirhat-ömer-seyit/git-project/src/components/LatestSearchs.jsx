import LatestSearchsStyle from "../CustomStyle.module.css";
import SearchBox from "./SearchBox";

const LatestSearchs = ({data,username}) => {

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12">
              <div className={LatestSearchsStyle.ulList}>
              {
                 data.slice(-5).map((item,i) => (
                  <div>
                    <a key={i} href="">{item}</a>
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