/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const Detail = ({ news }) => {
  const { index } = useParams();
  const selectedItem = news.results[parseInt(index)];

  return (
    <div>
      <h1>{selectedItem.title}</h1>
      <img
        src={
          selectedItem
            ? selectedItem.image_url
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
        }
        alt=""
      />
      <p>{selectedItem.content}</p>
      <p>{selectedItem.category}</p>
      <p>{selectedItem.pubDate}</p>
      <a href={selectedItem.link}>link</a>
    </div>
  );
};

export default Detail;
