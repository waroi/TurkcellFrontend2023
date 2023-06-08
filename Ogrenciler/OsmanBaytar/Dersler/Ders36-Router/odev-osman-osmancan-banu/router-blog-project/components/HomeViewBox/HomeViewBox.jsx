import { Box } from "./HomeViewBoxStyle";

const HomeViewBox = ({ info, index }) => {
  return (
    <div className="col-lg-4" id={index}>
      <Box>
        <div>
          <img className="img-fluid" src={info.urlToImage} />
        </div>
        <div>
          <div>{info.author}</div>
          <div>{info.title}</div>
        </div>
      </Box>
    </div>
  );
};

export default HomeViewBox;
