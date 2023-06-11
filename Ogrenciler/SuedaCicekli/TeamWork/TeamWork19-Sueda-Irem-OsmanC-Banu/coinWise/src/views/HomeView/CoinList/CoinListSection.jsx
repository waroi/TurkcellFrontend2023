import { useData } from "../../../context/FetchContext";
import StarIcon from "../../../assets/Icon.png";
const CoinListSection = () => {
  const data = useData();

  return (
    <div className="container my-5">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">
              <button className="btn btn-warning">
                <img src={StarIcon} alt="" />
              </button>
            </th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">1h%</th>
            <th scope="col">24h%</th>
            <th scope="col">7d%</th>
            <th scope="col">Market Cap</th>
            <th scope="col">PriceBTC</th>
            <th scope="col">Circuating Supply</th>
            <th scope="col">Links</th>
          </tr>
        </thead>
        <tbody>
          {data.data.slice(0, 20).map((item) => (
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinListSection;
