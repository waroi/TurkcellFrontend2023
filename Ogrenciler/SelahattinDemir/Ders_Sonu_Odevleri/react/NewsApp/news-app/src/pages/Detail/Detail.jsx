/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const Detail = ({ news }) => {
  const { index } = useParams();
  console.log(index);
  const selectedItem = news.results[parseInt(index)];

  return (
    <div>
      <h1>{selectedItem.title}</h1>
      <img src={selectedItem.image_url} alt="" />
      <p>{selectedItem.description}</p>
      <p>{selectedItem.category}</p>
      <p>{selectedItem.pubDate}</p>
      <a href={selectedItem.link}>link</a>
    </div>
  );
};

export default Detail;
