import { useTheme } from "../../context/Context";
import Table from "../../Components/Table/Table";

const ListPage = () => {
  const { coins, page, setPage } = useTheme();

  return (
    <div>
      <h1>List</h1>
      <Table coins={coins} />
      <button
        className="btn btn-danger"
        onClick={() => (page > 0 ? setPage(page - 100) : null)}
      >
        Prev
      </button>
      <button className="btn btn-primary" onClick={() => setPage(page + 100)}>
        Next
      </button>
    </div>
  );
};

export default ListPage;
