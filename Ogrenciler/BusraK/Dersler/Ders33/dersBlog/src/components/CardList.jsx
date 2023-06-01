import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
const CardList = () => {
  const [cards, setCards] = useState([]);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setCards(json));

    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((json) => setImgs(json));
  }, []);

  return (
    <div class="d-flex row gap-2 ">
      {cards.map((card) => {
        const imgCard = imgs.find((item) => item.id == card.id);
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            body={card.body}
            url={imgCard && imgCard.download_url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
