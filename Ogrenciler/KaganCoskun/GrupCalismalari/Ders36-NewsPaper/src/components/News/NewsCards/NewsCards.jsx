/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, CardBody, CardCategory, CardImage, CardTime, CardTitle, CardUpperInfo} from "./styled";
import { Link } from "react-router-dom";

const NewsCards = ({news, link}) => {
  const [image, setImage] = useState(null);


  useEffect(() => {
    setImage(news?.image);
  }, [news]);
  return (
    <>
      <Card>
        <Link to={link}>
          <CardImage src={image} onError={() => setImage("https://www.pumpkin.care/wp-content/uploads/2020/08/Cat-Age-Chart-Hero-Opt1.jpg")} />
          <CardBody>
            <CardUpperInfo>
            <CardCategory>{news?.source}</CardCategory>
            <CardTime>{new Date(news?.date).toLocaleDateString()}</CardTime>
            </CardUpperInfo>
            <CardTitle>{news?.name}</CardTitle>
          </CardBody>
          </Link>
      </Card>
    </>
  );
};

export default NewsCards;
