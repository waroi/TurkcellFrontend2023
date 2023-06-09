import "./style.css";
import error from "../../assets/404.png";

const NotFound = () => {
  return (
    <div className="not-found-div">
      <img src={error} alt="images" />
    </div>
  );
};

export default NotFound;
