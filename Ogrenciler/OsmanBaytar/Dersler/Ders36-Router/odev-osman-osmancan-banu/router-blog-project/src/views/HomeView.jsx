import HomeViewBox from "../../components/HomeViewBox/HomeViewBox";

const HomeView = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          if (item.urlToImage) {
            return <HomeViewBox info={item} key={index} index={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default HomeView;
