import ReactDOM from "react-dom"
const index = ({ target, text }) => {
    return ReactDOM.createPortal(
        <div>Selam Dünyalı, hedefim {text}</div>, target
    )
}

export default index