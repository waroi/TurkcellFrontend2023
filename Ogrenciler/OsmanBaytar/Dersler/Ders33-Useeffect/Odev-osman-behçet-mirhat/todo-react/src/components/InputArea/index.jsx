import './index.css';

const InputArea = () => {
  return (
    <div className='container inputArea'>
      <div className='upper-input '>
      <input className='form-control' type="text" placeholder="Type the person" />
      <input className='form-control' type="text" placeholder="Type the job" />
      <input className='form-control' type="date" placeholder="Type the date" />
      </div>
      <div className='lower-input'>
        <button className='btn btn-primary'>Add Todo</button>
        <button className='btn btn-success'>Edit Todo</button>
      </div>
      
    </div>
  );
};

export default InputArea;
