/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, CardBody, CardCategory, CardImage, CardTime, CardTitle, CardUpperInfo} from "./styled";

const NewsCards = ({news}) => {
  const [image, setImage] = useState(null);


  useEffect(() => {
    setImage(news?.image);
  }, [news]);
  return (
    <>
      <Card>
          <CardImage src={image} onError={() => setImage("https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg")} />
          <CardBody>
            <CardUpperInfo>
            <CardCategory>{news?.source}</CardCategory>
            <CardTime>{new Date(news?.date).toLocaleDateString()}</CardTime>
            </CardUpperInfo>
            <CardTitle>{news?.name}</CardTitle>
          </CardBody>
      </Card>
    </>
  );
};

export default NewsCards;
