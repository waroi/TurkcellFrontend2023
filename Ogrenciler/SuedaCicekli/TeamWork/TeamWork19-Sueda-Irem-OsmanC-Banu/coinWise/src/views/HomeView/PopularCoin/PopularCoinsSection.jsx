import { useData } from "../../../context/ThemeContext";
import PopularCard from "../../../components/Card/PopularCard";
const PopularCoinsSection = () => {
  const data = useData();

  // const topThreeData = data.slice(0, 3);
  console.log(data.data);
  return (
    <div>
      <div className="container">
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
