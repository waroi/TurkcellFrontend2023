import { useData } from "../../../context/FetchContext";
import PopularCard from "../../../components/Card/PopularCard";
const PopularCoinsSection = () => {
  const data = useData();

  return (
    <div>
      <div className="container">
        <h5 className="fw-bold pb-5">Most Popular Coins</h5>
        <div className="row justify-content-between position-relative">
          {data.data.slice(0, 3).map((item) => (
            <PopularCard key={item.rank} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCoinsSection;
