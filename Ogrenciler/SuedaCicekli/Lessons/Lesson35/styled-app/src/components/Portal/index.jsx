import ReactDOM from 'react-dom'


//target nereye ışınlayacağımızı belirtiyor
const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben portal componenti, hedefim ise {text}</div>,
    target
    //targete ışınlanacak olan component
  )


}

export default index
