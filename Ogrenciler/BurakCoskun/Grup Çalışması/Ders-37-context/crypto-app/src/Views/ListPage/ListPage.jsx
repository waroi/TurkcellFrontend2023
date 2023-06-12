import { useCustomContext } from "../../context/Context";
import Table from "../../Components/Table/Table";

const ListPage = () => {
  const { coins, page, setPage } = useCustomContext();

  return coins ? (
    <div className="container py-5 px-3">
      <h1>List of All Coins </h1>
      <Table coins={coins.slice(0, 20)} />
      <div className="buttons float-end">
        <button
          className="btn btn-danger me-3"
          onClick={() => (page > 0 ? setPage(page - 25) : null)}
        >
          Prev
        </button>
        <button className="btn btn-primary" onClick={() => setPage(page + 25)}>
          Next
        </button>
      </div>
    </div>
  ) : (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default ListPage;
