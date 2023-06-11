import { useTheme } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Table from "../Table/Table";

const Popular = () => {
  const { coins } = useTheme();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Popular</h1>
      <Table coins={coins.slice(0, 5)} />
      <button className="btn btn-primary" onClick={() => navigate("/list")}>
        See More
      </button>
    </div>
  );
};

export default Popular;
