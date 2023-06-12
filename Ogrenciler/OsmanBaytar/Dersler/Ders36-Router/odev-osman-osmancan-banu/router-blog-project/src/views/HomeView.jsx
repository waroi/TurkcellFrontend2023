import HomeViewBox from "../../components/HomeViewBox/HomeViewBox";

const HomeView = ({ data }) => {
  console.log(data);
  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((item, index) => {
          if (item.urlToImage) {
            return <HomeViewBox info={item} key={index} index={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default HomeView;
