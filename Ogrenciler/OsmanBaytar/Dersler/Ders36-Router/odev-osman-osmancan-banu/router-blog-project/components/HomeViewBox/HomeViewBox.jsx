import { Box, Image, Author, Title } from "./HomeViewBoxStyle";
import { Navigate, useNavigate } from "react-router-dom";

const HomeViewBox = ({ info, index }) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-6 col-lg-4">
      <Box id={index} onClick={() => navigate(`BlogInfo/${index}`)}>
        <div>
          <Image className="img-fluid" src={info.urlToImage} />
        </div>
        <div>
          <Author>{info.author}</Author>
          <Title>{info.title}</Title>
        </div>
      </Box>
    </div>
  );
};

export default HomeViewBox;
