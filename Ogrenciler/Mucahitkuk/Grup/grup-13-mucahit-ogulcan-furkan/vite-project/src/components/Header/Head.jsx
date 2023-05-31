import PropTypes from "prop-types";
import "./style.css"

const Head = ({setPage}) => {
  return (
    <div>
      <h1>Random.blog</h1>
      <div>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
      </div>
    </div>
  );
};


Head.propTypes = {
  setPage: PropTypes.func.isRequired
}


export default Head;
