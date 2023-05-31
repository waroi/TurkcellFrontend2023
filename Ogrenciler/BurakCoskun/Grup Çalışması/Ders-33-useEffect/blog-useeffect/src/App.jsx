import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [contents, setContents] = useState([]);
  const [images, setImages] = useState([]);
  /* 
  [
    {
      id: 1,
      title: "Title 1",
      body: "Body 1",
    }
  ]
  [
    {
      id: 1,
      imageUrl: "https://picsum.photos/200/300",
    }
  ]
  */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setContents(data));
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <h1>React App</h1>
      <div className="container">
        {contents.map((content) => {
          const image = images.find((image) => image.id === content.id);
          return <Card key={content.id} content={content} image={image} />;
        })}
      </div>
    </>
  );
}

export default App;
