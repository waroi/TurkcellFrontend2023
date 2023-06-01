import React, { useEffect, useState } from "react";
import Card from "../card/Card";

function CardList() {
  const [src, setSrc] = useState([]);
  const [text, setText] = useState([]);
  const [joint, setJoint] = useState([]);

  function fetchImageAndTexts() {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => setSrc(data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setText(data));
  }

  function createCommonObjects() {
    src.map((img) => {
      text.map((text) => {
        if (text.id == img.id) {
          joint.push({
            id: text.id,
            img: img.download_url,
            title: text.title,
            body: text.body,
          });
        }
      });
    });
  }

  useEffect(() => {
    fetchImageAndTexts();
    createCommonObjects();
  }, []);

  return (
    <div>
      <h1>Fatma-Nurgül-Selim Kart Listesi</h1>
      {joint.map((obj, i) => {
        return (
          <Card
            key={i}
            id={obj.id}
            src={obj.img}
            title={obj.title}
            body={obj.body}
          />
        );
      })}
    </div>
  );
}

export default CardList;
