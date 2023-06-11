import { useParams } from "react-router-dom"
import { useData } from "../../context/FetchContext";


const DetailPageCard = () => {
  const data = useData();
  const params = useParams();
  const curData = data.data.find((item) => item.name === params.name)

  console.log('detail', curData)
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <img src={curData.icon} alt="" />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default DetailPageCard
