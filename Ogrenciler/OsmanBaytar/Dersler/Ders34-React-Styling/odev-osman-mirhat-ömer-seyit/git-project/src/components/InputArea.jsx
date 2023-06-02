import InputAreaStyle from "../CustomStyle.module.css";

const InputArea = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className={`${InputAreaStyle.inputArea} col-4`}>
                <h2>Github User Search Area</h2>
                <label>Please type username</label>
                <div>
                <input className='mt-3' type="text" placeholder='Username' id='searchUsername'/>
                </div>
                <button className="btn btn-primary mt-3">Search Username</button>
            </div>
        </div>
    </div>
  )
}

export default InputArea;