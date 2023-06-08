import { useParams } from "react-router-dom"


const ParametreView = () => {

    const {id} = useParams();

  return (
    <div>ParametreView {id} li sayfa</div>
  )
}

export default ParametreView