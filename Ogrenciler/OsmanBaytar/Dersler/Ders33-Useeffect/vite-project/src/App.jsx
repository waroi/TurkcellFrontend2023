import { useEffect, useState } from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
  const [post, setPost] = useState([]);
  const [text, setText] = useState([]);

  // const [matchingItems, setMatchingItems] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => setPost(data));
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setText(data));
  }, []);
  useEffect(() => {
    const combinedArray = post.map(item1 => {
      const matchingItem = text.find(item2 => item2.id === item1.id);
      return {
        id: item1.id,
        download_url: item1.download_url,
        title:matchingItem ? matchingItem.title : null,
        body:matchingItem ? matchingItem.body : null     
      };
    });
  }, [post, text]);
  
  return (
    <>
      {combinedArray.map((item) => <Card dataImg={item} key={item.id} />)}
    </>
  );
}
export default App;