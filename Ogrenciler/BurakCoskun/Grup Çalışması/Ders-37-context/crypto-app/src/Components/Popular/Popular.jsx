import { useTheme } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Table from "../Table/Table";

const Popular = () => {
  const { coins } = useTheme();
  const navigate = useNavigate();
  return coins ? (
    <div className="container">
      <h1>Popular</h1>
      <Table coins={coins.slice(0, 5)} />
      <button className="btn btn-primary" onClick={() => navigate("/list")}>
        See More
      </button>
    </div>
  ) : (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Popular;
