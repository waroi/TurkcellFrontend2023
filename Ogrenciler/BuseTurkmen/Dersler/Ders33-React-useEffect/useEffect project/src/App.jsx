import { useEffect, useState } from "react";
import "./App.css";
import Deneme from "./Deneme";
import Hw from "./hw";

function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // useEffect(() => {
  //   console.log("useEffect çalıştı 1");
  // }, []); //sadece mount edildiğinde çalışır
  // useEffect(() => {
  //   console.log("didUpdate useEffect çalıştı 2");
  // }); //herhangi bir state değişikliği olduğunda çalışır

  // useEffect(() => {
  //   console.log("stateUpdate useEffect çalıştı 3");
  // }, [count, count2]); // count state değişikliği olduğunda çalışır

  // useEffect(() => {
  //   return () => {
  //     console.log("unMount useEffect çalıştı");
  //   };
  // });
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const getContent = () => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.log(error));
  };
  const getImages = () => {
    fetch("https://picsum.photos/v2/list?limit=100")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getContent();
    getImages();
  });

  return (
    <>
      {/* <h1 onClick={() => setCount(count + 1)}>useEffect</h1>
      <h2 onClick={() => setCount2(count2 + 1)}>{count2}</h2>
      <Deneme />
      <Hw /> */}
      {content.map((item) => {
        <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
}

export default App;