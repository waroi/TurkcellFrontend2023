import { useParams } from "react-router-dom";

const ParameterView = () => {
    const { id } = useParams()
    return (
        <div> ParameterView {id}</div>
    )
}

export default ParameterView