import { useEffect, useState } from "react";
import { Card, CardBody, CardCategory, CardImage, CardTime, CardTitle, CardUpperInfo} from "./styled";

const NewsCards = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage("https://cdn.karar.com/news/1567054.jpg");
  }, []);
  return (
    <>
      <Card>
          <CardImage src={image} onError={() => setImage("https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg")} />
          <CardBody>
            <CardUpperInfo>
            <CardCategory>Haber</CardCategory>
            <CardTime>Tarih</CardTime>
            </CardUpperInfo>
            <CardTitle>Mehmet Büyükekşi: 120 milyon dolarlık gelirimiz olacak</CardTitle>
          </CardBody>
      </Card>
    </>
  );
};

export default NewsCards;
